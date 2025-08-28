import React from 'react'
import { useNavigate } from 'react-router-dom';



const ShowVehicle = () => {
    const navigate = useNavigate();

  const handleShowAllClick = () => {
    navigate('/show-all');
  };
  return (
    <div>
      
    </div>
  )
}

export default ShowVehicle
