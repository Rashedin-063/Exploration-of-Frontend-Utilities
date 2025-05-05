import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import FormRow from '@/components/FormRow';
import FormLabel from '@/components/FormLabel';
import InputText from '@/components/InputText';
import Button from '@/components/Button';

function Contact() {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

 const [file, setFile] = useState<File | undefined>();

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();    
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    setFile(target.files[0]);

    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(target.files[0]);
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
            <input
              id='image'
              name='image'
              type='file'
              accept='image/png, image/jpg'
              className='border border-gray-300 rounded p-2 w-full'
              multiple
              onChange={handleOnChange}
            />
          </FormRow>
         

          {preview && (
            <p className='mb-5'>
              <img src={preview as string} alt='Upload preview' />
            </p>
          )}

          <Button>Submit</Button>
        </form>
      </Container>
    </Layout>
  );
}

export default Contact;
