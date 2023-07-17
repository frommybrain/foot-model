import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Howl } from 'howler';

function playSound(toe) {
  const sound = new Howl({
    src: [`/sounds/${toe}.mp3`]
  });

  console.log(`Hovering over ${toe}`);
  sound.play();
}

export function Foot(props) {
  const { nodes, materials } = useGLTF('/models/Foot.gltf')

  return (
    <group {...props} dispose={null}>
      <mesh name="Foot" geometry={nodes.Foot.geometry} material={materials.FootDetails} position={[0.01, 2.573, 0.818]} rotation={[0, 0, -0.087]} scale={[-26.149, -26.149, -39.979]} />
      <mesh onClick={() => playSound('Toe5')} name="Toe5" geometry={nodes.Toe5.geometry} material={materials.FootDetails} position={[0.01, 2.573, 0.818]} rotation={[0, 0, -0.087]} scale={[-26.149, -26.149, -39.979]} />
      <mesh onClick={() => playSound('Toe1')} name="Toe1" geometry={nodes.Toe1.geometry} material={materials.FootDetails} position={[0.01, 2.573, 0.818]} rotation={[0, 0, -0.087]} scale={[-26.149, -26.149, -39.979]} />
      <mesh onClick={() => playSound('Toe2')} name="Toe2" geometry={nodes.Toe2.geometry} material={materials.FootDetails} position={[0.01, 2.573, 0.818]} rotation={[0, 0, -0.087]} scale={[-26.149, -26.149, -39.979]} />
      <mesh onClick={() => playSound('Toe3')} name="Toe3" geometry={nodes.Toe3.geometry} material={materials.FootDetails} position={[0.01, 2.573, 0.818]} rotation={[0, 0, -0.087]} scale={[-26.149, -26.149, -39.979]} />
      <mesh onClick={() => playSound('Toe4')} name="Toe4" geometry={nodes.Toe4.geometry} material={materials.FootDetails} position={[0.01, 2.573, 0.818]} rotation={[0, 0, -0.087]} scale={[-26.149, -26.149, -39.979]} />
    </group>
  )
}

useGLTF.preload('/models/Foot.gltf')
