import Link from 'next/link';
import { supabase } from '../supabaseClient';

const MyPage = ({ userInfo, owners, profile }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">My Page</h1>
      <div className="mb-4">
        {owners.map((owner) => (
          <div key={owner.id} className="mb-2">
            <Link href={`/store/editOwner/${owner.id}`} className="text-blue-500 underline">
              {owner.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <Link href="/store/addStore" className="text-blue-500 underline">
          Add Store
        </Link>
      </div>
      {userInfo && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-4">
          <h2 className="text-2xl font-bold mb-4">User Information</h2>
          <p>ID: {userInfo.id}</p>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      )}
      {profile && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <p>ID: {profile.id}</p>
          <p>Name: {profile.name}</p>
          <p>Mobile: {profile.mobile}</p>
          <p>Profile: {profile.profile}</p>
        </div>
      )}
    </div>
  );
};

export default MyPage;

export async function getServerSideProps() {
  // Fetch userInfo
  const userInfoResponse = await fetch('http://localhost:3000/api/mypage');
  const userInfo = await userInfoResponse.json();

  // Fetch owners
  const ownersResponse = await fetch('http://localhost:3000/api/owners');
  const owners = await ownersResponse.json();

  // Fetch profile
  const { data: profile, error } = await supabase
    .from('owner')
    .select('id, name, mobile, profile')
    .eq('id', 'JsPJaoCYFlH_QvNhu-wFGIvgLOuWbLb78vRt1YuK6mk')
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return {
      props: {
        userInfo: null,
        owners: [],
        profile: null,
      },
    };
  }

  return {
    props: {
      userInfo,
      owners,
      profile,
    },
  };
}
