import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Gltf, Stage, CameraShake } from '@react-three/drei'
import { EffectComposer, N8AO, SMAA } from '@react-three/postprocessing'
import { Vector3 } from 'three'
import { useEffect } from 'react'
import { Foot } from './modelFoot'
import { FriesBox } from './modelFriesBox'
import { Rig } from './cameraController'

export default function App() {
  return (
    <Canvas shadows gl={{ antialias: false }} dpr={[1, 1.5]}>
      <color attach="background" args={['#e2a54e']} />
      <Rig />
      <Stage
        intensity={0.05}
        preset="soft"
        shadows={{ type: 'accumulative', color: '#e2a54e', colorBlend: 2, opacity: 1, size: 4096 }}
        adjustCamera={false}
        environment="city">
        <group position={[0,0,0]} rotation={[0,0,0]} >
        <Foot />
        <FriesBox />
        </group>
      </Stage>
      <EffectComposer disableNormalPass multisampling={0}>
        <N8AO aoRadius={0.1} intensity={2} aoSamples={6} denoiseSamples={4} />
        <SMAA />
      </EffectComposer>
    </Canvas>
  )
}
