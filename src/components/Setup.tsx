import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Setup(props:any) {
  const { nodes, materials }:any = useGLTF("/remvoed.glb");


  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.109"]}
        position={[-1.35, 2.01, -4.91]}
        scale={[1, 0.24, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.110"]}
        position={[-2.87, 4.89, -5.69]}
        scale={[1, 0.04, 0.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.111"]}
        position={[3.48, 1.76, -4.05]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.111"]}
        position={[3.48, 1.76, -5.71]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.111"]}
        position={[-1.36, 1.76, -2.12]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.111"]}
        position={[-2.72, 1.76, -2.12]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.111"]}
        position={[-1.36, 1.76, -5.71]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.111"]}
        position={[-2.72, 1.76, -5.71]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={materials["Material.112"]}
        position={[1.33, 1.81, -2.2]}
        rotation={[0, 1.57, 0]}
        scale={[0.67, 0.67, 0.83]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={materials["Material.113"]}
        position={[0, 0.07, -2.46]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <group
        position={[0.02, 5.04, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.54}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013.geometry}
          material={materials["Material.114"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013_1.geometry}
          material={materials["Material.115"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013_2.geometry}
          material={materials["Material.116"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.117"]}
        position={[1.55, 2.56, -5.02]}
        rotation={[0.4, 0, 0]}
        scale={[0.25, 0.33, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.117"]}
        position={[1.56, 3.22, -4.85]}
        scale={[0.92, 0.63, 0.63]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.117"]}
        position={[-0.69, 2.56, -4.63]}
        rotation={[0.43, 0.38, -0.17]}
        scale={[0.25, 0.33, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.117"]}
        position={[-0.61, 3.22, -4.48]}
        rotation={[0, 0.41, 0]}
        scale={[0.92, 0.63, 0.63]}
      />
      <group position={[0, -0.01, -2.5]} scale={[4.22, 2.68, 2.68]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials["Material.118"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_1.geometry}
          material={materials["Material.119"]}
        />
      </group>
      <group
        position={[-2.28, 2.3, -3.51]}
        rotation={[-Math.PI, 0.46, -Math.PI]}
        scale={0.3}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015.geometry}
          material={materials["Material.121"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_1.geometry}
          material={materials["Material.122"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath002.geometry}
        material={materials["Material.123"]}
        position={[-2.34, 3.52, -3.54]}
        rotation={[-Math.PI, 0.46, Math.PI / 2]}
        scale={0.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials["Material.124"]}
        position={[-1.97, 3.28, -3.36]}
        rotation={[Math.PI / 2, 0, -1.11]}
        scale={0.09}
      />
      <group
        position={[2.71, 2.53, -5.08]}
        rotation={[1.92, -0.12, -1.89]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle017.geometry}
          material={materials["Material.132"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle017_1.geometry}
          material={materials["Material.133"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["Material.134"]}
        position={[1.51, 2.3, -4.11]}
        scale={[0.76, 0.06, 0.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[0.88, 2.31, -4.31]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[1.87, 2.31, -4.31]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={nodes.Plane007.material}
        position={[1.45, 2.31, -3.88]}
        scale={[0.25, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials["Material.134"]}
        position={[2.57, 2.31, -3.9]}
        scale={[0.17, 0.1, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.135"]}
        position={[1.15, 4.43, -5.56]}
        rotation={[0, 0, 0.18]}
        scale={[0.02, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials["Material.136"]}
        position={[1.25, 3.97, -5.56]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Material.137"]}
        position={[-1.49, 2.27, -2.89]}
        rotation={[Math.PI / 2, 0, -0.64]}
        scale={[0.02, 0.28, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Material.138"]}
        position={[1.2, 4.43, -5.56]}
        rotation={[0, 0, 0.18]}
        scale={[0.02, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["Material.139"]}
        position={[1.34, 4.43, -5.56]}
        rotation={[0, 0, -0.32]}
        scale={[0.02, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
        position={[1.34, 4.43, -5.61]}
        rotation={[0, 0, -0.32]}
        scale={[0.02, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["Material.140"]}
        position={[1.28, 4.43, -5.46]}
        rotation={[0, -1.28, -0.32]}
        scale={[0.02, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Material.138"]}
        position={[-2.34, 2.67, -2.69]}
        rotation={[0, 0, 0.18]}
        scale={[0.03, 0.31, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials["Material.141"]}
        position={[-2.21, 2.1, -2.69]}
        scale={0.19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials["Material.135"]}
        position={[-2.28, 2.67, -2.69]}
        rotation={[0, 0, 0.18]}
        scale={[0.03, 0.31, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials["Material.139"]}
        position={[-2.1, 2.67, -2.69]}
        rotation={[0, 0, -0.32]}
        scale={[0.03, 0.31, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={materials["Material.142"]}
        position={[-2.1, 2.67, -2.76]}
        rotation={[0, 0, -0.32]}
        scale={[0.03, 0.31, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials["Material.140"]}
        position={[-2.17, 2.67, -2.57]}
        rotation={[0, -1.28, -0.32]}
        scale={[0.03, 0.31, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials["Material.143"]}
        position={[-1.85, 2.27, -2.89]}
        rotation={[Math.PI / 2, 0, 0.28]}
        scale={[0.02, 0.28, 0.02]}
      />
      <group
        position={[-2.11, 2.35, -4.24]}
        rotation={[0, 0.44, 1.56]}
        scale={[0.11, 0.37, 0.31]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials["Material.144"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_1.geometry}
          material={materials["Material.126"]}
        />
      </group>
      <group
        position={[3.33, 2.25, -3.95]}
        rotation={[0, 0.29, 0]}
        scale={[0.23, 0.02, 0.23]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials["Material.145"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051_1.geometry}
          material={materials["Material.146"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus004.geometry}
        material={materials["Material.147"]}
        position={[3.13, 2.34, -3.81]}
        rotation={[Math.PI / 2, 0, -0.29]}
        scale={0.08}
      />
      <group
        position={[-2.84, 4.67, -5.62]}
        rotation={[0, 0, 1.23]}
        scale={[0.1, 0.34, 0.28]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials["Material.150"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056_1.geometry}
          material={materials["Material.151"]}
        />
      </group>
      <group
        position={[-3.46, 4.57, -5.62]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.34, 0.28]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={materials["Material.152"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube057_1.geometry}
          material={materials["Material.126"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.159"]}
        position={[-0.98, 4.35, -5.53]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials["Material.159"]}
        position={[-0.98, 4.35, -5.53]}
        rotation={[-Math.PI / 2, 1.04, -1.98]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["Material.160"]}
        position={[-1.72, 4.34, -5.47]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials["Material.160"]}
        position={[-1.63, 4.37, -5.47]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={100}
      />
      <group
        position={[4.04, 4.82, -5.6]}
        rotation={[0, 0, -0.51]}
        scale={[0.1, 0.34, 0.28]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials["Material.153"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube058_1.geometry}
          material={materials["Material.154"]}
        />
      </group>
      <group
        position={[3.7, 4.82, -5.6]}
        rotation={[0, 0, -0.18]}
        scale={[0.1, 0.34, 0.28]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials["Material.155"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059_1.geometry}
          material={materials["Material.156"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["pot.003"]}
        position={[2.7, 4.49, -5.54]}
        rotation={[0, 1.47, 0]}
        scale={0.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["soil.003"]}
          position={[0, 0.94, 0]}
        />
        <group position={[-0.04, 0.72, 0]} rotation={[0, -0.31, 0.04]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane033.geometry}
            material={materials["plant.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane033_1.geometry}
            material={materials["plant_rim.003"]}
          />
        </group>
        <group position={[0.03, 0.72, -0.03]} rotation={[3.13, 0.13, -3.01]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034.geometry}
            material={materials["plant.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034_1.geometry}
            material={materials["plant_rim.003"]}
          />
        </group>
        <group position={[0.11, 0.72, -0.01]} rotation={[-3.12, -0.51, -2.89]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane035.geometry}
            material={materials["plant.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane035_1.geometry}
            material={materials["plant_rim.003"]}
          />
        </group>
        <group position={[0.05, 0.69, 0]} rotation={[-0.01, -0.21, 0.24]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane036.geometry}
            material={materials["plant.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane036_1.geometry}
            material={materials["plant_rim.003"]}
          />
        </group>
      </mesh>
      <group
        position={[3.41, 4.82, -5.6]}
        rotation={[0, 0, -0.53]}
        scale={[0.1, 0.34, 0.28]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials["Material.157"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062_1.geometry}
          material={materials["Material.158"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.004"]}
        position={[-1.16, 3.34, -6.85]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[6.08, 4.09, 4.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["image_(2)001"].geometry}
        material={materials["image (2).005"]}
        position={[-0.59, 3.22, -4.45]}
        rotation={[Math.PI / 2, 0, -0.41]}
        scale={[0.91, 0.98, 1.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["image_(2)"].geometry}
        material={materials["image (2).004"]}
        position={[1.56, 3.23, -4.81]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.91, 1, 1.13]}
      />
    </group>
  );
}

useGLTF.preload("/remvoed.glb");
