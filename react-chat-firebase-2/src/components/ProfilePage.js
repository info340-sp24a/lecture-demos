import React, { useState } from 'react';

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

import { updateProfile } from 'firebase/auth'

export default function ProfilePage(props) {
  const { currentUser } = props;
  //convenience
  const displayName = currentUser.userName;

  const [inputtedFile, setInputtedFile] = useState(undefined)
  const [previewUrl, setPreviewUrl] = useState(currentUser.userImg) //initial URL

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      console.log(imageFile);
      setInputtedFile(imageFile); //controlled form
      setPreviewUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = async (event) => {
    console.log("Uploading", inputtedFile);

    const storage = getStorage();
    const imageRef = storageRef(storage, "userImages/"+currentUser.userId+".png")

    await uploadBytes(imageRef, inputtedFile)

    //get the url of that image I just uploaded
    const url = await getDownloadURL(imageRef); //get the url of that image
    console.log(url);

    //assign that url to the user (in the user list)
    await updateProfile(currentUser, {photoURL: url} )
    
    //do other stuff after that
  }

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <img src={previewUrl} alt="user avatar preview" className="mb-2"/>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}