import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import FormRow from '@/components/FormRow';
import FormLabel from '@/components/FormLabel';
import InputText from '@/components/InputText';
import Button from '@/components/Button';
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

function Contact() {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

const onDrop = useCallback((acceptedFiles: Array<File>) => {
  const file = new FileReader();

  file.onload = function () {
    setPreview(file.result);
  };

  file.readAsDataURL(acceptedFiles[0]);
}, []);
  
const {acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });


  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (typeof acceptedFiles[0] === 'undefined') return;

    const formData = new FormData();

    formData.append('file', acceptedFiles[0]);
    formData.append('upload_preset', 'preset_6');
    formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

   fetch(
     url,
     {
       method: 'POST',
       body: formData,
     }
   )
     .then((response) => response.json())
     .then((data) => {
       console.log('Upload successful:', data);
     })
     .catch((error) => {
       console.error('Error uploading image:', error);
     });
  }


  return (
    <Layout>
      <Container>
        <h1 className='text-6xl font-black text-center text-slate-100 mb-20'>
          Contact Us
        </h1>

        <form
          className='max-w-md border border-gray-200 rounded p-6 mx-auto'
          onSubmit={handleOnSubmit}
        >
          <FormRow className='mb-5'>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <InputText id='name' name='name' type='text' />
          </FormRow>

          <FormRow className='mb-5'>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <InputText id='email' name='email' type='email' />
          </FormRow>

          <FormRow className='mb-5'>
            <FormLabel htmlFor='message'>Message</FormLabel>
            <InputText id='message' name='message' type='text' />
          </FormRow>

          <FormRow className='mb-5'>
            <FormLabel htmlFor='image'>Image</FormLabel>
            <div {...getRootProps()} className='w-full border border-gray-400 rounded p-4'>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
          </FormRow>
          {preview && (
            <div className='mb-5 relative'>
              <img src={preview as string} alt='Upload preview' className='w-40 mx-auto my-12' />
              <button onClick={() => setPreview(null)} className='absolute -top-4 right-16 bg-red-700  rounded-full w-8 h-8'>X</button>
            </div>
          )}

          <Button>Submit</Button>
        </form>
      </Container>
    </Layout>
  );
}

export default Contact;
