import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three';
import {
  Canvas,
  extend,
  useLoader,
  useFrame,
  useThree,
} from '@react-three/fiber';

export function Office(props) {
  const { nodes, materials } = useGLTF('/office.glb');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.SM_Prop_Printer_3D_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[15.945, 0.75, 8.163]} rotation={[0, 1.491, 0]} />
      <mesh geometry={nodes['SM_Prop_VHS_Tape_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.965, 0.75, 7.646]} rotation={[0, 0.688, 0]} />
      <mesh geometry={nodes['SM_Prop_Controller_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.427, 0.75, 6.844]} rotation={[-Math.PI, 0.616, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Cup_Lid_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.898, 0.75, 7.071]} />
      <mesh geometry={nodes.SM_Prop_Napkins_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[22.79, 0.757, 12.368]} rotation={[0, 0.335, 0]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.5, 0, 10]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_(6)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.5, 0, 10]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.SM_Prop_CubicalWall_Tall_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[13.5, 0, 12.5]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_(7)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.5, 0, 10]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_(9)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.5, 0, 12]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.5, 0, 7.5]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_(8)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.5, 0, 12]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_(10)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[18.5, 0, 12]} rotation={[0, 1.571, 0]} scale={[1.437, 1, 1]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.5, 0, 10]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.5, 0, 10]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.5, 0, 8]} />
      <mesh geometry={nodes.SM_Prop_CubicalWall_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[21.5, 0, 8]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_01_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.503, 0, 13.488]} rotation={[0, -1.57, 0]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.5, 0, 8]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_01_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.503, 0, 8.486]} rotation={[0, -1.57, 0]} />
      <mesh geometry={nodes['SM_Prop_Desk_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.415, 0, 12.499]} scale={[1.065, 1, 1.064]} />
      <mesh geometry={nodes['SM_Prop_Desk_01_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.559, 0, 8.485]} rotation={[Math.PI, 0, Math.PI]} scale={[1.065, 1, 1.064]} />
      <mesh geometry={nodes['SM_Prop_Desk_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.559, 0, 10.569]} scale={[1.065, 1, 1.064]} />
      <mesh geometry={nodes['SM_Prop_Child_Art_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.025, 1.344, 10.021]} />
      <mesh geometry={nodes.SM_Prop_Plant_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[14.932, 0, 7.823]} rotation={[0, -0.455, 0]} />
      <mesh geometry={nodes['SM_Prop_Table_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[20.82, 0, 9.006]} rotation={[0, -Math.PI / 2, 0]} scale={[0.924, 1, 1]} />
      <mesh geometry={nodes['SM_Prop_Table_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.891, 0, 7.861]} rotation={[0, -1.57, 0]} scale={[0.674, 1, 0.611]} />
      <mesh geometry={nodes.SM_Prop_Guillotine_02.geometry} material={materials.PolygonOffice_Material_01_A} position={[20.41, 0.75, 8.52]}>
        <mesh geometry={nodes.SM_Prop_SM_Prop_Guillotine_02_Blade.geometry} material={materials.PolygonOffice_Material_01_A} position={[0.144, 0.086, 0]} />
      </mesh>
      <mesh geometry={nodes['SM_Prop_Bin_03_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.23, 0, 10.275]} rotation={[0, 0.07, 0]} />
      <mesh geometry={nodes.SM_Prop_Bin_03.geometry} material={materials.PolygonOffice_Material_01_A} position={[18.238, 0, 12.001]} rotation={[-Math.PI, 1.497, -Math.PI]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_Door_01_(12)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[15, 0, 5]} />
      <mesh geometry={nodes.SM_Prop_Plant_02.geometry} material={materials.PolygonOffice_Material_01_A} position={[17.714, 0, 10.211]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_Tall_01_(18)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.5, 0, 12]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_Tall_01_(16)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.5, 0, 12]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_Tall_01_(7)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.5, 0, 10]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_Tall_01_(14)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.5, 0, 10]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_Tall_01_(15)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[18.5, 0, 12]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_Tall_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.5, 0, 12.5]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_Tall_01_(19)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.5, 0, 10]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_Tall_01_(9)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.5, 0, 7.5]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_Tall_01_(17)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.5, 0, 10]} />
      <mesh geometry={nodes['SM_Bld_Wall_Brick_01_(34)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[25, 0, 7.5]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Brick_01_(42)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[12.5, 0, 15]} />
      <mesh geometry={nodes['SM_Bld_Wall_Brick_01_(38)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.5, 0, 15]} />
      <mesh geometry={nodes['SM_Bld_Wall_Brick_01_(40)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[17.5, 0, 15]} />
      <mesh geometry={nodes['SM_Bld_Wall_Brick_01_(37)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[25, 0, 15]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes['SM_Prop_Plant_Flowers_02_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.28, 0.757, 8.251]} rotation={[0, 0.465, 0]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_Half_(6)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.5, 0, 7.5]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_Half_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.5, 0, 12.5]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_Half_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.5, 0, 10]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Tall_01_Half_(7)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.5, 0, 12]} />
      <mesh geometry={nodes['SM_Prop_Cord_Pile_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[18.537, 0, 10.175]} />
      <mesh geometry={nodes['SM_Prop_Cord_Pile_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.499, 0, 7.869]} rotation={[Math.PI, 0, Math.PI]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(116)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[22.5, 0, 7.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(69)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[20, 0, 7.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(120)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[12.5, 0, 12.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(121)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[17.5, 0, 12.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(57)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[12.5, 0, 7.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(123)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[15, 0, 12.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(100)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[15, 0, 10]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(128)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[15, 0, 15]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(126)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[17.5, 0, 15]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(55)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[12.5, 0, 10]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(68)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[17.5, 0, 7.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(122)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[20, 0, 12.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(66)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[17.5, 0, 10]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(125)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[12.5, 0, 15]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(105)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[15, 0, 7.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(127)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[20, 0, 15]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(67)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[20, 0, 10]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(129)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[22.5, 0, 15]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(124)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[22.5, 0, 12.5]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Floor_Carpet_01_(115)'].geometry} material={materials.PolygonOffice_Material_02_A} position={[22.5, 0, 10]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(34)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[25, 0, 5]} rotation={[0, -1.571, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(63)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[12.5, 0, 10]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(148)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[12.5, 0, 15]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(147)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[12.5, 0, 12.5]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(150)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[25, 0, 12.5]} rotation={[0, -1.571, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(31)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[15, 0, 15]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(143)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[12.5, 0, 5]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(32)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[20, 0, 15]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(62)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[12.5, 0, 7.5]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_01_(49)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[25, 0, 15]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Bld_Wall_Window_Blinds_Open_02_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[17.5, 0, 15]} rotation={[Math.PI, 0, Math.PI]} />
      <group position={[22.104, 0.754, 12.582]}>
        <mesh geometry={nodes['SM_Prop_Bottle_01_(2)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Bottle_01_(2)_2'].geometry} material={materials.PolygonOffice_Material_Glass} />
      </group>
      <mesh geometry={nodes['SM_Prop_Poster_03_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[18.483, 0.981, 9.98]} rotation={[-Math.PI, 0, -Math.PI]} scale={1.491} />
      <mesh geometry={nodes['SM_Prop_CardRoller_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[12.796, 0.75, 6.327]} rotation={[-Math.PI, 1.362, -Math.PI]} />
      <group position={[13.411, 0.75, 11.734]} rotation={[-Math.PI, 0.835, -Math.PI]}>
        <mesh geometry={nodes['SM_Prop_Computer_Setup_01_(3)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Computer_Setup_01_(3)_2'].geometry} material={materials.PolygonOffice_Material_Screen_04} />
      </group>
      <group position={[13.419, 0.75, 8.235]} rotation={[0, 0.715, 0]}>
        <mesh geometry={nodes['SM_Prop_Computer_Setup_01_(4)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Computer_Setup_01_(4)_2'].geometry} material={materials.PolygonOffice_Material_Screen_03} />
      </group>
      <mesh geometry={nodes['SM_Prop_FootRest_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.199, 0, 6.977]} rotation={[-Math.PI, 0.644, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Computer_Mousepad_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.173, 0.75, 6.293]} rotation={[0, 0.441, 0]} />
      <mesh geometry={nodes['SM_Prop_Fire_Extinguisher_01_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[24.783, 0.705, 7.895]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Prop_Fire_Extinguisher_01_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.84, 0.705, 14.786]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_FaxMachine_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[20.561, 0.75, 9.673]} rotation={[Math.PI, -1.1, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Clock_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[12.637, 2.285, 11.19]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.SM_Prop_Clock_01_Hand_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[0, 0, 0.043]} />
        <mesh geometry={nodes.SM_Prop_Clock_01_Hand_02.geometry} material={materials.PolygonOffice_Material_01_A} position={[0, 0, 0.043]} />
      </mesh>
      <mesh geometry={nodes.SM_Prop_Book_Group_05.geometry} material={materials.PolygonOffice_Material_01_A} position={[12.971, 0, 5.704]} />
      <mesh geometry={nodes.SM_Prop_Webcam_02.geometry} material={materials.PolygonOffice_Material_01_A} position={[21.56, 0.757, 12.496]} rotation={[0, -0.614, 0]} scale={0.644} />
      <mesh geometry={nodes['SM_Prop_WallDressing_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.128, 1.009, 7.469]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.SM_Prop_WallDressing_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[14.128, 1.009, 12.479]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_WallDressing_01_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[24.855, 1.12, 13.299]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Brick_Window_02_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15, 0, 15]}>
        <mesh geometry={nodes.SM_Bld_Wall_Brick_Window_02_Glass.geometry} material={materials.PolygonOffice_Material_Glass} />
      </mesh>
      <mesh geometry={nodes['SM_Bld_Wall_Brick_Window_02_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[20, 0, 15]}>
        <mesh geometry={nodes.SM_Bld_Wall_Brick_Window_02_Glass_1.geometry} material={materials.PolygonOffice_Material_Glass} />
      </mesh>
      <mesh geometry={nodes['SM_Prop_Card_Scanner_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.543, 1.057, 4.853]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Paper_Pile_02_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[17.999, 0.424, 13.797]} rotation={[0, -1.451, 0]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_01_(6)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.495, 0, 6.449]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_01_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.495, 0, 8.531]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[17.5, 0, 10]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.5, 0, 8]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_01_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.495, 0, 11.449]} />
      <mesh geometry={nodes.SM_Prop_CubicalWall_Pillar_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[21.5, 0, 8]} />
      <mesh geometry={nodes['SM_Prop_CubicalWall_Pillar_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.495, 0, 13.525]} />
      <mesh geometry={nodes['SM_Prop_Book_Magazine_02_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.291, 0.751, 8.6]} rotation={[0, 0.366, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Glass_01_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.5, 0, 5]}>
        <mesh geometry={nodes.SM_Bld_Wall_Glass_01_Glass.geometry} material={materials.PolygonOffice_Material_Glass} />
      </mesh>
      <mesh geometry={nodes['SM_Bld_Wall_Glass_01_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[17.5, 0, 5]}>
        <mesh geometry={nodes.SM_Bld_Wall_Glass_01_Glass_1.geometry} material={materials.PolygonOffice_Material_Glass} />
      </mesh>
      <mesh geometry={nodes['SM_Prop_CardboardBox_01_(13)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.897, 0.279, 8.038]} rotation={[-Math.PI, 1.242, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_CardboardBox_01_(11)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.866, 0, 8.321]} rotation={[0, 1.366, 0]} />
      <mesh geometry={nodes['SM_Prop_CardboardBox_01_(12)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.897, 0, 7.858]} rotation={[-Math.PI, 1.242, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Chair_05_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.977, 0, 13.922]} rotation={[Math.PI, -0.81, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Chair_05_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.5, 0, 11.392]} rotation={[-Math.PI, 0.406, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Paper_Pile_03_(7)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[16.061, 0, 7.415]} />
      <mesh geometry={nodes['SM_Prop_Paper_Pile_03_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[18.278, 0, 13.241]} rotation={[Math.PI, -1.511, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Paper_Pile_03_(6)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.363, 0, 6.76]} />
      <mesh geometry={nodes.SM_Prop_Napkins_02.geometry} material={materials.PolygonOffice_Material_01_A} position={[22.98, 0.753, 12.327]} scale={[0.692, 0.555, 1]} />
      <mesh geometry={nodes['SM_Prop_Socket_Wall_02_(23)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[24.826, 0.244, 7.359]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Prop_Socket_Wall_02_(24)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[24.826, 0.244, 12.514]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Prop_Socket_Wall_02_(36)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.49, 0.244, 14.83]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Socket_Wall_02_(8)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[17.24, 0.244, 5.174]} />
      <mesh geometry={nodes['SM_Prop_Socket_Wall_02_(21)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[12.67, 0.244, 9.698]} rotation={[0, Math.PI / 2, 0]} />
      <group position={[22.616, 0.749, 10.088]}>
        <mesh geometry={nodes.SM_Prop_Computer_Monitor_Double_01_1.geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes.SM_Prop_Computer_Monitor_Double_01_2.geometry} material={materials.PolygonOffice_Material_Screen_01} />
        <mesh geometry={nodes.SM_Prop_Computer_Monitor_Double_01_3.geometry} material={materials.PolygonOffice_Material_Screen_02} />
      </group>
      <group position={[22.501, 0.753, 12.352]} rotation={[0, 0.015, 0]}>
        <mesh geometry={nodes['SM_Prop_Computer_Monitor_02_(2)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Computer_Monitor_02_(2)_2'].geometry} material={materials.PolygonOffice_Material_Screen_04} />
      </group>
      <group position={[23.271, 0.753, 12.483]} rotation={[0, -0.56, 0]}>
        <mesh geometry={nodes['SM_Prop_Computer_Monitor_02_(1)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Computer_Monitor_02_(1)_2'].geometry} material={materials.PolygonOffice_Material_Screen_01} />
      </group>
      <mesh geometry={nodes['SM_Prop_Figure_Viking_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.25, 0.752, 12.479]} rotation={[0, 1.021, 0]} scale={0.9} />
      <mesh geometry={nodes.SM_Prop_Bin_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[19.038, 0, 11.697]} />
      <mesh geometry={nodes['SM_Prop_Bin_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.848, 0, 8.299]} rotation={[0, -0.208, 0]} />
      <mesh geometry={nodes['SM_Prop_FireAlarm_Switch_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[17.053, 1.346, 5.144]} />
      <mesh geometry={nodes.SM_Prop_Radio_02.geometry} material={materials.PolygonOffice_Material_01_A} position={[15.656, 0.75, 7.505]} rotation={[0, 1.57, 0]} />
      <mesh geometry={nodes.SM_Prop_Table_Drafting_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[19.731, 0, 12.442]} />
      <mesh geometry={nodes['SM_Prop_Chair_07_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.75, 0, 9.25]} rotation={[Math.PI, -0.19, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Chair_07_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[20.438, 0, 10.691]} rotation={[0, -0.683, 0]} />
      <mesh geometry={nodes['SM_Prop_Chair_07_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.944, 0, 5.881]} rotation={[0, 0.27, 0]} />
      <mesh geometry={nodes.SM_Prop_Ruler_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[19.147, 1.028, 12.597]} rotation={[Math.PI / 6, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Prop_Divider_Folding_01_Preset_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.012, 0, 12.111]} rotation={[0, 1.394, 0]} />
      <group position={[21.795, 0.749, 12.573]} rotation={[0, 0.542, 0]} scale={1.09}>
        <mesh geometry={nodes.SM_Prop_Computer_Monitor_03_1.geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes.SM_Prop_Computer_Monitor_03_2.geometry} material={materials.PolygonOffice_Material_Screen_03} />
      </group>
      <mesh geometry={nodes['SM_Prop_Certificate_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[12.631, 1.621, 7.017]} rotation={[0, 1.57, 0]} />
      <mesh geometry={nodes['SM_Prop_Socket_Switch_01_(12)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.249, 1.339, 4.84]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Security_Camera_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[12.756, 2.375, 5.153]}>
        <mesh geometry={nodes.SM_Prop_Security_Camera_Head_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[0, 0.13, 0.216]} rotation={[0, 0.851, 0]} />
      </mesh>
      <mesh geometry={nodes['SM_Prop_Plant_04_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[15.887, 0, 6.841]} />
      <mesh geometry={nodes.SM_Prop_Computer_Tower_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[14.308, 0, 13.024]} />
      <mesh geometry={nodes['SM_Prop_Fire_Detector_01_(10)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[17.129, 2.364, 5.12]} />
      <mesh geometry={nodes['SM_Prop_Fire_Detector_01_(9)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.195, 2.364, 14.867]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes.SM_Prop_HDD_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[21.711, 0.752, 12.382]} rotation={[0, -0.882, 0]} scale={0.83} />
      <mesh geometry={nodes.SM_Prop_Desk_04.geometry} material={materials.PolygonOffice_Material_01_A} position={[20.445, 0, 11.546]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_CorkBoard_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.191, 1.146, 5.112]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_Window_02_(5)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[17.5, 0, 15]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.SM_Bld_Wall_Baseboard_Window_02_Glass.geometry} material={materials.PolygonOffice_Material_Glass} />
      </mesh>
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_Window_02_(4)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[22.5, 0, 15]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.SM_Bld_Wall_Baseboard_Window_02_Glass_1.geometry} material={materials.PolygonOffice_Material_Glass} />
      </mesh>
      <mesh geometry={nodes['SM_Prop_Cellphone_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.919, 0.752, 12.813]} rotation={[0, 0.946, 0]} />
      <mesh geometry={nodes['SM_Prop_Bin_Rubbish_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.863, 0.321, 8.294]} rotation={[Math.PI, -0.819, Math.PI]} />
      <mesh geometry={nodes.SM_Prop_Bin_Rubbish_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[19.025, 0.26, 11.695]} />
      <mesh geometry={nodes['SM_Prop_Computer_Tower_Modern_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.154, 0, 5.352]} rotation={[0, 1.57, 0]}>
        <mesh geometry={nodes.SM_Prop_Computer_Tower_Modern_Glass_01.geometry} material={materials.PolygonOffice_Material_Glass} position={[-0.023, 0.314, 0.009]} />
      </mesh>
      <mesh geometry={nodes.SM_Prop_Printer_3D_Toy_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[15.941, 0.908, 8.171]} rotation={[-Math.PI, 1.561, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_CoffeeTable_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[18.122, 0, 14.133]} rotation={[0, -Math.PI / 2, 0]} scale={[1.185, 1, 1]} />
      <group position={[13.124, 0.75, 6.866]} rotation={[-Math.PI, 0.976, -Math.PI]}>
        <mesh geometry={nodes['SM_Prop_Computer_Setup_02_(1)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Computer_Setup_02_(1)_2'].geometry} material={materials.PolygonOffice_Material_Screen_01} />
      </group>
      <group position={[13.228, 0.75, 13.154]} rotation={[0, 0.717, 0]}>
        <mesh geometry={nodes['SM_Prop_Computer_Setup_02_(1)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Computer_Setup_02_(1)_2'].geometry} material={materials.PolygonOffice_Material_Screen_01} />
      </group>
      <group position={[20.516, 0.75, 11.656]} rotation={[-Math.PI, -0.029, -Math.PI]}>
        <mesh geometry={nodes['SM_Prop_Computer_Setup_02_(1)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Computer_Setup_02_(1)_2'].geometry} material={materials.PolygonOffice_Material_Screen_01} />
      </group>
      <group position={[22.5, 0.75, 8.25]} rotation={[0, 0.029, 0]}>
        <mesh geometry={nodes['SM_Prop_Computer_Setup_02_(4)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Computer_Setup_02_(4)_2'].geometry} material={materials.PolygonOffice_Material_Screen_04} />
      </group>
      <mesh geometry={nodes['SM_Prop_Plant_08_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.186, 0.75, 9.562]} />
      <mesh geometry={nodes['SM_Prop_WallDressing_02_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.082, 1.253, 14.853]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_WallDressing_02_(6)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.481, 1, 10.624]} rotation={[0, -1.571, 0]} />
      <mesh geometry={nodes['SM_Prop_Plant_05_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[20.127, 0, 7.679]} />
      <mesh geometry={nodes['SM_Prop_Plant_07_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.786, 0, 14.25]} />
      <mesh geometry={nodes.SM_Prop_WallDressing_04.geometry} material={materials.PolygonOffice_Material_01_A} position={[12.658, 1.129, 8.633]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes['SM_Prop_Computer_Keyboard_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.372, 0.755, 12.764]} rotation={[0, 0.053, 0]} />
      <mesh geometry={nodes['SM_Prop_Computer_Keyboard_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.5, 0.75, 10.75]} />
      <mesh geometry={nodes['SM_Prop_Plant_13_(4)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.178, 0, 14.279]} rotation={[0, 1.309, 0]} />
      <mesh geometry={nodes['SM_Prop_Chair_04_(9)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[19.75, 0, 9]} rotation={[-Math.PI, 1.43, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Chair_04_(8)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14, 0, 11.25]} rotation={[0, -0.325, 0]} />
      <mesh geometry={nodes.SM_Prop_Note_06.geometry} material={materials.PolygonOffice_Material_01_A} position={[19.769, 1.058, 12.536]} rotation={[Math.PI / 6, 0, 0]} scale={[7.734, 1.782, 5.156]} />
      <mesh geometry={nodes['SM_Prop_Chair_03_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.75, 0, 8.75]} rotation={[Math.PI, -0.263, Math.PI]} />
      <group position={[18.17, 0.424, 14.463]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.SM_Prop_Photocopier_02_1.geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes.SM_Prop_Photocopier_02_2.geometry} material={materials.PolygonOffice_Material_Screen_03} />
        <mesh geometry={nodes.SM_Prop_Photocopier_02_Lid_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[0, 0.56, -0.284]} />
      </group>
      <mesh geometry={nodes['SM_Prop_Printer_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.018, 0.75, 8.71]} rotation={[Math.PI, -1.371, Math.PI]}>
        <mesh geometry={nodes.pCube275.geometry} material={materials.PolygonOffice_Material_01_A} position={[-0.047, 0.244, -0.156]} rotation={[-1.059, 0, 0]} />
      </mesh>
      <mesh geometry={nodes.SM_Prop_Calender_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[12.639, 1.632, 5.714]} rotation={[0, 1.57, 0]} />
      <mesh geometry={nodes.SM_Prop_Plant_09.geometry} material={materials.PolygonOffice_Material_01_A} position={[12.866, 0.75, 10.801]} />
      <mesh geometry={nodes['SM_Prop_Figure_Cowgirl_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[12.827, 0.75, 5.638]} rotation={[-Math.PI, 1.494, -Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Cord_Wall_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[17.371, 0, 14.489]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Cord_Wall_01_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.41, 0, 14.489]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.SM_Bld_Wall_Window_Blinds_Up_03.geometry} material={materials.PolygonOffice_Material_01_A} position={[25, 0, 7.5]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.SM_Prop_CorkBoard_02.geometry} material={materials.PolygonOffice_Material_01_A} position={[22.623, 0.902, 10]} rotation={[Math.PI, 0, Math.PI]} scale={0.678} />
      <mesh geometry={nodes['SM_Prop_WallDressing_03_(5)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.237, 0.786, 9.981]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_WallDressing_03_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[24.866, 1.105, 6.899]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Prop_Cord_Desk_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.685, 0, 12.005]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes['SM_Prop_Cord_Desk_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.689, 0, 10.219]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Prop_Computer_Mouse_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23, 0.75, 10.75]} />
      <mesh geometry={nodes['SM_Prop_Computer_Mouse_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.907, 0.758, 12.732]} rotation={[0, 0.145, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Brick_Window_03_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[25, 0, 12.5]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.SM_Bld_Wall_Brick_Window_03_Glass.geometry} material={materials.PolygonOffice_Material_Glass} />
      </mesh>
      <mesh geometry={nodes['SM_Prop_NotePad_02_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.011, 0.763, 12.438]} rotation={[0, 0.689, -0.072]} />
      <mesh geometry={nodes.SM_Prop_Paper_04.geometry} material={materials.PolygonOffice_Material_01_A} position={[18.24, 1.082, 14.343]} rotation={[Math.PI, -1.219, Math.PI]} />
      <mesh geometry={nodes['SM_Prop_Note_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[23.309, 0.751, 12.784]} rotation={[-Math.PI / 2, 0, -0.448]} />
      <mesh geometry={nodes.SM_Prop_Pen_06.geometry} material={materials.PolygonOffice_Material_01_A} position={[22.191, 0.762, 12.474]} rotation={[-Math.PI / 2, 0, -0.255]} />
      <mesh geometry={nodes.SM_Prop_Figure_Goblin_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[22.174, 0.759, 12.371]} rotation={[-1.455, 0.165, 0.701]} />
      <mesh geometry={nodes['SM_Prop_Cup_Coffee_Disposable_Open_Mellow_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.108, 0.75, 5.745]} />
      <mesh geometry={nodes.SM_Prop_Paper_Pile_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[17.965, 0, 13.263]} />
      <mesh geometry={nodes.SM_Prop_Book_Phone_Open_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[13.784, 0.75, 7.295]} />
      <mesh geometry={nodes.SM_Prop_Book_Group_07.geometry} material={materials.PolygonOffice_Material_01_A} position={[12.798, 0.75, 5.913]} rotation={[0, 1.57, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Window_Blinds_Up_02_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.5, 0, 15]} rotation={[Math.PI, 0, Math.PI]} />
      <group position={[18.193, 0, 12.592]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes['SM_Prop_Photocopier_01_(3)_1'].geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes['SM_Prop_Photocopier_01_(3)_2'].geometry} material={materials.PolygonOffice_Material_Screen_03} />
        <mesh geometry={nodes.SM_Prop_Photocopier_01_Lid_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[0, 0.954, -0.284]} />
      </group>
      <mesh geometry={nodes['SM_Prop_Plant_Flowers_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.117, 0.75, 7.76]} rotation={[0, 1.128, 0]} />
      <mesh geometry={nodes['SM_Bld_Wall_Baseboard_Window_03_(3)'].geometry} material={materials.PolygonOffice_Material_03_A} position={[25, 0, 7.5]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.SM_Bld_Wall_Baseboard_Window_03_Glass.geometry} material={materials.PolygonOffice_Material_Glass} />
      </mesh>
      <mesh geometry={nodes['SM_Prop_Computer_Mousepad_02_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[22.948, 0.75, 12.737]} />
      <mesh geometry={nodes.SM_Prop_Cup_Pens_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[14.144, 0.75, 6.961]} />
      <mesh geometry={nodes.SM_Prop_Darkboard_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[12.633, 2.091, 6.336]} rotation={[0, 1.57, 0]} />
      <mesh geometry={nodes['SM_Prop_Plant_11_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[20.775, 0.75, 8.189]} />
      <mesh geometry={nodes.SM_Prop_Modem_03.geometry} material={materials.PolygonOffice_Material_01_A} position={[21.507, 0.753, 12.258]} rotation={[Math.PI, -1.177, Math.PI]} scale={0.85} />
      <group position={[15.754, 0.023, 5.058]} rotation={[0, -0.002, 0]}>
        <mesh geometry={nodes['SM_Bld_Door_04_(1)_1'].geometry} material={materials.PolygonOffice_Material_Glass} />
        <mesh geometry={nodes['SM_Bld_Door_04_(1)_2'].geometry} material={materials.PolygonOffice_Material_01_A} />
      </group>
      <mesh geometry={nodes['SM_Bld_Wall_Glass_Door_01_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[20, 0, 5]}>
        <mesh geometry={nodes.SM_Bld_Glass_Door_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[0.14, 0, 0.154]} rotation={[Math.PI, -0.355, Math.PI]}>
          <mesh geometry={nodes.SM_Bld_Glass_Door_01_Glass.geometry} material={materials.PolygonOffice_Material_Glass} />
        </mesh>
        <mesh geometry={nodes.SM_Bld_Wall_Glass_Door_01_Glass.geometry} material={materials.PolygonOffice_Material_Glass} />
      </mesh>
      <mesh geometry={nodes['SM_Prop_Computer_Tower_02_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[21.648, 0, 12.761]} />
      <mesh geometry={nodes['SM_Prop_Plant_14_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[24.282, 0, 5.701]} />
      <mesh geometry={nodes.SM_Prop_Console_PlayBox_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[14.355, 0.75, 7.218]} rotation={[-Math.PI, 0.154, -Math.PI]} />
      <group position={[17.78, 0, 5.57]} rotation={[0, 0.865, 0]}>
        <mesh geometry={nodes.SM_Prop_Rolling_TV_01_1.geometry} material={materials.PolygonOffice_Material_01_A} />
        <mesh geometry={nodes.SM_Prop_Rolling_TV_01_2.geometry} material={materials.PolygonOffice_Material_Screen_02} />
      </group>
      <mesh geometry={nodes['SM_Bld_Pillar_Exterior_04_(7)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[25, 0, 15]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['SM_Prop_Briefcase_01_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.95, 0, 5.293]}>
        <mesh geometry={nodes.SM_Prop_Briefcase_Lid_01.geometry} material={materials.PolygonOffice_Material_01_A} />
      </mesh>
      <mesh geometry={nodes['SM_Prop_EnergyDrink_01_(6)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.427, 0.748, 7.342]} rotation={[0, -1.251, 0]} />
      <mesh geometry={nodes['SM_Prop_Plant_03_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[14.293, 0.746, 12.186]} />
      <mesh geometry={nodes.SM_Prop_Chair_06.geometry} material={materials.PolygonOffice_Material_01_A} position={[22.257, 0, 13.285]} rotation={[-Math.PI, 0.447, -Math.PI]} />
      <mesh geometry={nodes.SM_Prop_Webcam_01.geometry} material={materials.PolygonOffice_Material_01_A} position={[22.517, 1.315, 12.385]} />
      <mesh geometry={nodes['SM_Prop_Desk_02_(3)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.622, 0, 8.49]} />
      <mesh geometry={nodes.SM_Prop_Desk_02.geometry} material={materials.PolygonOffice_Material_01_A} position={[13.622, 0, 11.5]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes['SM_Prop_Desk_02_(1)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.622, 0, 6.525]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes['SM_Prop_Desk_02_(2)'].geometry} material={materials.PolygonOffice_Material_01_A} position={[13.622, 0, 13.491]} />
    </group>
  )
}

useGLTF.preload('/office.glb')
