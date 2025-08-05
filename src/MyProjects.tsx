import bedImage from "../public/Screenshot 2025-08-05 092621.png"
import googleDriveImage from "../public/Screenshot 2025-08-05 092717.png"
import app from "../public/Screenshot 2025-08-05 110424.png"

const MyProjects = () => {
  return (
    <div className='containerBackground p-5' id="myProjects">
      <h1 className='text-white'>My Projects</h1>
      <div className="flex p-6 gap-7 text-white">
        <div className="flex-1/3">
          <img src={bedImage} alt="bedProject" className="h-auto w-full"/>
          <p>A web app that I have created for my school project. You can access it <a href="https://bed-ca2-shanna024985.onrender.com">here</a>.</p>
        </div>
        <div className="flex-1/3">
          <img src={googleDriveImage} alt="googleDriveProject" className="h-auto w-full"/>
          <p>A web app which allows you to add the same set of files and folders into a google drive folder within a click of a button. You can access it <a href="https://google-drive-folder-creation.onrender.com">here</a>.</p>
        </div>
        <div className="flex-1/3 justify-center content-center flex flex-col">
          <img src={app} alt="iphoneApp" className="h-auto w-[23%] self-center"/>
          <p>An app to compare prices between different taxi apps for any routes you take</p>
        </div>
      </div>
    </div>
  )
}

export default MyProjects