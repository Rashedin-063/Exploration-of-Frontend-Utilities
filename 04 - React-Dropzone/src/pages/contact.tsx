import { SetStateAction, useEffect, useState, } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import FormRow from '@/components/FormRow';
import FormLabel from '@/components/FormLabel';
import InputText from '@/components/InputText';
import Button from '@/components/Button';
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

const fileTypes = ['JPG', 'PNG', 'GIF'];

function Contact() {

   const [file, setFile] = useState<File | null>(null);
   const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const handleChange = async(file: SetStateAction<null>) => {
      setFile(file);

         const formData = new FormData();
         formData.append('file', file);
         formData.append('upload_preset', 'preset_6');
      formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);
      
        try {
          const response = await fetch(
           url,
            {
              method: 'POST',
              body: formData,
            }
          );

          const data = await response.json();
          console.log('Upload success:', data);
          setUploadedUrl(data.secure_url);
        } catch (err) {
          console.error('Upload failed:', err);
        }
  };
  

  

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
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
            <FileUploader
              handleChange={handleChange}
              name='file'
              types={fileTypes}
            />
          </FormRow>

          {uploadedUrl && (
            <div style={{ marginTop: '20px' }}>
              <p>Uploaded Image:</p>
              <img
                src={uploadedUrl}
                alt='Uploaded'
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          )}

          <Button>Submit</Button>
        </form>
      </Container>
    </Layout>
  );
}

export default Contact;
