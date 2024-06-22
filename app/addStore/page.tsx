'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { createClient } from '@supabase/supabase-js';
import { useDropzone } from 'react-dropzone';

export default function AddStore() {
  const { data: session } = useSession({ required: true });
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? '';
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  const [storeData, setStoreData] = useState({
    name: '',
    address: '',
    bio: '',
    phone: ''
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStoreData({
      ...storeData,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!session) {
      alert('로그인이 필요합니다.');
      return;
    }

    let imageUrl = null;
    if (file) {
      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('stores')
        .upload(`public/${file.name}`, file);

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        alert('이미지 업로드 중 오류가 발생했습니다.');
        return;
      }

      imageUrl = uploadData?.path;
    }

    const newStore = {
      ...storeData,
      owner_id: 2,
      created_at: new Date().toISOString(),
      image_url: imageUrl
    };

    const { data, error } = await supabase
      .from('store')
      .insert(newStore);

    if (error) {
      console.error('Error adding store:', error);
      alert('가게 추가 중 오류가 발생했습니다.');
    } else {
      alert('가게가 성공적으로 추가되었습니다!');
      // 초기화
      setStoreData({
        name: '',
        address: '',
        bio: '',
        phone: ''
      });
      setFile(null);
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto max-w-md space-y-6">
        {session && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-3xl font-bold text-center">가게 추가</h1>
            <div>
              <Label htmlFor="name">가게 이름</Label>
              <Input id="name" name="name" value={storeData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="address">주소</Label>
              <Input id="address" name="address" value={storeData.address} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="bio">소개</Label>
              <Input id="bio" name="bio" value={storeData.bio} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="phone">전화번호</Label>
              <Input id="phone" name="phone" value={storeData.phone} onChange={handleChange} />
            </div>
            <div {...getRootProps({ className: 'dropzone' })} className="border border-dashed border-gray-500 p-4 text-center">
              <input {...getInputProps()} />
              {file ? <p>{file.name}</p> : <p>가게 사진을 드래그하거나 클릭하여 업로드하세요.</p>}
            </div>
            <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md">가게 추가</button>
          </form>
        )}
      </div>
    </div>
  );
}
