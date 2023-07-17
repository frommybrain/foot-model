import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function FriesBox(props) {
  const { nodes, materials } = useGLTF('/models/FriesBox.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh name="FriesPaperBox" geometry={nodes.FriesPaperBox.geometry} material={materials.BoxLogo} rotation={[Math.PI / 2, 0, 0]} scale={0.183} castShadow 
        receiveShadow />
    </group>
  )
}

useGLTF.preload('/models/FriesBox.gltf')
