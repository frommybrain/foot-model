import { useThree, useFrame } from '@react-three/fiber'
import { CameraShake } from '@react-three/drei'
import { Vector3 } from 'three'
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';



const Rig = () => {
    const { camera, mouse } = useThree();
    const speed = useRef(0.02);  // Rotation speed
    const radius = useRef(6);    // distance away from foot
    const currentAngleX = useRef(0);  
    const targetAngleX = useRef(0);  
    const currentAngleY = useRef(0);  
    const targetAngleY = useRef(0); 
    const maxRotationX = useRef(THREE.MathUtils.degToRad(30));  // Max rotation x
    const maxRotationY = useRef(THREE.MathUtils.degToRad(10));  // Max rotation y
  
    useEffect(() => {
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    }, [camera])
  
    useFrame(() => {
      // Clamp angles
      targetAngleX.current = THREE.MathUtils.clamp(mouse.x * maxRotationX.current, -maxRotationX.current, maxRotationX.current);
      targetAngleY.current = THREE.MathUtils.clamp(mouse.y * maxRotationY.current, -maxRotationY.current, maxRotationY.current);
  
      // Lerp between current angle towards the target angle on x and y
      currentAngleX.current = THREE.MathUtils.lerp(currentAngleX.current, targetAngleX.current, 0.05);
      currentAngleY.current = THREE.MathUtils.lerp(currentAngleY.current, targetAngleY.current, 0.05);
  
      // Calc new cam pos
      camera.position.x = radius.current * Math.sin(speed.current + currentAngleX.current);
      camera.position.z = radius.current * Math.cos(speed.current + currentAngleX.current);
      camera.position.y = radius.current * Math.sin(speed.current + currentAngleY.current); 
  
      camera.lookAt(new THREE.Vector3(0, 0, 0));  
    });
  
    return null;
  }
  
  export { Rig };
  
  