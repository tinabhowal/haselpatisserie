// import React, { useState, useRef } from 'react';
// import './Form.css';

// const Form = () => {

// const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
// })

// const [files, setFiles] = useState<FileList | null>(null);

// const [status, setStatus] = useState('');

// const fileInputRef = useRef<HTMLInputElement | null>(null);

// const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const {name, value} = e.target;
//     setFormData((prevState) => ({
//         ...prevState,
//         [name]:value
//     }))
// };

// const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if(e.target.files){
//         setFiles(e.target.files);
//     }
// }

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus('Sending...');

//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('email', formData.email);
//     data.append('message', formData.message);
//     if(formData.phone){
//         data.append('phone', formData.phone)
//     }else{data.append('phone', '')};

//     if(files){
//         Array.from(files).forEach((file) => {
//             data.append('images', file);// Append each file with the field name 'images'
//         })
//     }

//     try{
//         const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/message`, {
//             method: 'POST',
//             body: data,
//         });

//         if(response.ok){
//             setStatus('Message sent successfully');
//             setFormData({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 message: ''
//             });
//             setFiles(null);
//             if(fileInputRef.current){
//                 fileInputRef.current.value = '';
//             }
//         } else {
//             const errorData = await response.json();
//             console.error('Error response', errorData);
//             setStatus('Failed to send message');
//         }
//     } catch (error) {
//         console.error('Error sending message', error);
//         setStatus('Failed to send message');
//     };
// }

// return (
//     <div className="form-container">
//        {/* <p style={{textAlign: 'start' , marginBottom: '20px', fontSize: '1.2rem'}}> Or drop us a message and we will get back to you </p> */}
//       <form onSubmit={handleSubmit} className="custom-form">
//         {/* Name */}
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             // placeholder="Enter your name"
//           />
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             // placeholder="Enter your email"
//           />
//         </div>

//         {/* Phone */}
//         <div className="form-group">
//           <label htmlFor="phone">Phone</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             // placeholder="Enter your phone number"
//           />
//         </div>

//         {/* Message */}
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={5}
//             // placeholder="Type your message here"
//           ></textarea>
//         </div>

//         <div className="form-group">
//             <label htmlFor="reference image">Images for reference(max 3)</label>
//             <input
//               type='file'
//               ref={fileInputRef}
//               id='images'
//               name='images'
//               accept='image/*'
//               multiple
//               onChange={handleFileChange}
//               />
              
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn-submit">
//           Send
//         </button>

//         {/* Status */}
//         {status && <p className="status-message">{status}</p>}
//       </form>
//     </div>
//   );
// }

// export default Form






import React, { useState, useRef, useEffect } from 'react';
import './Form.css';

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [files, setFiles] = useState<File[]>([]); 
  const [status, setStatus] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const newFiles = Array.from(e.target.files);

  //     setFiles((prevFiles) =>{
  //       if(prevFiles.length + newFiles.length > 3){
  //         alert('You can add maximum three images');
  //         return prevFiles;
  //       }
  //       return[...prevFiles, ...newFiles]
  //     });
  //   }
  // };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      const newFiles = Array.from(e.target.files);

      if(newFiles.length > 3){
        alert('You can only add up to three images. Please select your images again.');
        setFiles([]);
        if(fileInputRef.current){
          fileInputRef.current.value = ''
        }
      }else{
        setFiles(newFiles)
      }
    }
  }

  useEffect(() => {
    if(files.length === 0 && fileInputRef.current){
      fileInputRef.current.value = ''
    }
  },[files.length])

  const handleRemoveImage = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
    if (formData.phone) {
      data.append('phone', formData.phone);
    } else {
      data.append('phone', '');
    }

    if (files.length > 0) {
      files.forEach((file) => {
        data.append('images', file); 
      });
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/message`, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setFiles([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        const errorData = await response.json();
        console.error('Error response', errorData);
        setStatus('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message', error);
      setStatus('Failed to send message');
    };
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="custom-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          ></textarea>
        </div>

        {/* File Input */}
        <div className="form-group">
          <label htmlFor="reference image">Images for reference (max 3)</label>
          <input
            type="file"
            ref={fileInputRef}
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            max={3} 
            // disabled={files.length >= 3}
          />
        </div>

        
        <div className="preview-container">
          {files.map((file, index) => (
            <div key={index} className="image-preview">
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                className="preview-image"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="remove-image-btn"
              >
                X
              </button>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-submit">
          Send
        </button>

        {/* Status */}
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
}

export default Form;
