import React, { Fragment, useState } from 'react';
import styles from '../styles/Home.module.css';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const x = '';

  const onChange = e => {
    const data = '';
    x = e.target.files[0].name;
    for (let i = 0; i < e.target.files.length; i++) {
      data = data + e.target.files[i].name + '<br></br>';
      document.getElementById('l2').innerHTML = data;
    }
  };

  const onSubmit = async e => {
    e.preventDefault(); 
    var d = x;
    var res = await fetch('api/fileupload', {
      method: 'POST',
      body: JSON.stringify({d}),
      headers: {
        'Content-Type' : 'application/json',
      }
    });
    var data = await res.json();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='file'
            id='customFile'
            multiple
            onChange={onChange}
            style={{width: "300px", height: "40px", fontSize: "23px", color: "#eaeaea"}}
          />
          <br></br><br></br>
          <label id='l2' htmlFor='customFile' style={{color: "#eaeaea", width: "300px", height: "40px", fontSize: "23px"}}>
           File name(s)
          </label>
        </div>

        <div style = {{padding: "20px"}}></div>
        <input
        type = 'submit'
        value = 'Upload'
        className={styles.button}
        />
      </form>
    </Fragment>
  );
};

export default FileUpload