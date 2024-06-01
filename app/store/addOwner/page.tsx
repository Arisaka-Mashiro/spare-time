"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddOwner = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    mobile: '',
    profile: '',
    created_at: ''
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 서버사이드 API 엔드포인트로 데이터 전송
    const response = await fetch('/api/addOwner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.error("Error submitting data");
      return;
    }

    const data = await response.json();
    console.log("Data inserted: ", data);
    // 제출 후 다른 페이지로 이동
    router.push('/');
  };

  return (
    <div>
      <h1>Add Owner</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="profile">Profile:</label>
          <input
            type="text"
            id="profile"
            name="profile"
            value={formData.profile}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="created_at">Created At:</label>
          <input
            type="text"
            id="created_at"
            name="created_at"
            value={formData.created_at}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddOwner;
