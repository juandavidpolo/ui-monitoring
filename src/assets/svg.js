import React from "react";

import {
  faCircleUser,
  faBell,
} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faMagnifyingGlass,
  faServer,
  faDatabase,
  faTriangleExclamation,
  faCircleExclamation,
  faCircleInfo,
  faCircleCheck,
  faCircleXmark,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const userIcon = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon 
      icon={faCircleUser} 
      size={size} 
      style={{color: color}} 
      flip={flip} 
      rotation={rotation}/>
  )
}

export const notificationsCampaing = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon 
      icon={faBell}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const angleUp = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon 
      icon={faAngleDown}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const search = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const database = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon
      icon={faDatabase}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const server = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon
      icon={faServer}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const cloud = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon
      icon={faCloud}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const triangleExclamation = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon
      icon={faTriangleExclamation}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const circleExclamation = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon
      icon={faCircleExclamation}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const circleInfo = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon
      icon={faCircleInfo}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const circleCheck = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon
      icon={faCircleCheck}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}

export const circleXMarck = (color="#3B3B3D", size="", flip="", rotation=0) => {
  return(
    <FontAwesomeIcon
      icon={faCircleXmark}
      size={size}
      style={{color: color}}
      flip={flip}
      rotation={rotation}/>
  )
}