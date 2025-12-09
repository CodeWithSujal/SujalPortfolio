import { Project, Skill, SocialLink } from './types';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  MonitorPlay,
  Box,
  Wand2,
  Clapperboard,
  Layers
} from 'lucide-react';

// Using a custom type for lucide icons in the constants since we are importing them
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/sujalmalhotra2704', icon: Linkedin },
  { platform: 'Instagram', url: 'https://www.instagram.com/sujalvfx0427', icon: Instagram },
  { platform: 'Email', url: 'sujalmalhotra42@gmail.com', icon: Mail },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "3D Headphone Modeling & Rendering ",
    description: "This modern headphone model was created in Blender with a focus on clean hard-surface modeling, realistic materials, and professional product rendering. I designed smooth, ergonomic forms complemented by soft leather ear cushions and a sleek matte finish, achieving a visually appealing and functional look. A studio lighting setup was used to highlight subtle details, shadows, and material transitions, resulting in a high-quality render that showcases my skills in product visualization, texturing, and lighting.",
    tools: ["Blender", "After Effect", "Photoshop"],
    image: ["https://github.com/sujalmalhotra42-del/portfolio/raw/main/head4.png", "https://github.com/CodeWithSujal/PortfolioData/raw/main/head2.png", "https://github.com/CodeWithSujal/PortfolioData/raw/main/head3.png", "https://github.com/CodeWithSujal/PortfolioData/raw/main/head2.png"],
    projectLink:"https://drive.google.com/file/d/1i9GhB--Cb2qXoqyu8FDB7HqhRrIoxI2J/view?usp=sharing",
    category: "Modeling"
  },
  {
    id: 2,
    title: "Beach Environment Creation",
    description: "This immersive environment was designed and built in Unreal Engine 5, focusing on mood, composition, and believable world-building. I explored advanced UE5 features such as dynamic lighting, detailed materials, and atmospheric effects to create a visually compelling scene that feels alive. Through careful placement of props, realistic texture work, and depth-enhancing post-processing, the environment tells a story while maintaining strong performance and visual clarity. This project highlights my ability to craft engaging spaces that blend artistic style with real-time rendering techniques.",
    tools: ["Unreal engine 5", "After Effect"],
    image: ["https://github.com/CodeWithSujal/PortfolioData/raw/main/Screenshot%202025-12-09%20231626.png"],
    projectLink:"https://drive.google.com/file/d/1GFG_ppSQcQzUvxffAEEBkl7kjiOGWgC1/view?usp=sharing",
    category: "Environment"
  },
  {
    id: 3,
    title: "Village Scene Environment",
    description: "This 3D environment was entirely modeled and assembled in Blender, focusing on realistic scale, composition, and storytelling through visual design. I created each asset from scratch with clean topology and optimized geometry, ensuring both detail and performance. Procedural and hand-painted textures were used to bring materials to life, while custom lighting and atmospheric elements enhanced the depth and mood of the scene. This project reflects my strong understanding of environment art, asset creation, and cinematic presentation within Blender.",
    tools: ["Blender", "After Effect"],
    image: ["https://github.com/CodeWithSujal/PortfolioData/raw/main/0166.png"],
    projectLink:"https://drive.google.com/file/d/1e41skWw6cd7qfZINI5X8VjDYaSknZTHk/view?usp=sharing",
    category: "Environment Creation"
  },
  {
    id: 4,
    title: "Dr. Strange like VFX",
    description: "This green-screen VFX shot was fully composited in Blender using a complete post-production workflow. I performed precise keying to remove the green screen cleanly, followed by edge refinement, color matching, and realistic integration with the digital background. To enhance believability, I adjusted lighting, shadows, and atmospheric elements so the subject fits naturally within the scene. This project highlights my skills in chroma keying, compositing, and visual effects integration, demonstrating how I bring filmed footage and 3D environments together seamlessly.",
    tools: ["Blender", "Cinema 4D","After Effects"],
    image: ["https://github.com/CodeWithSujal/PortfolioData/raw/main/Screenshot%202025-12-02%20233556.png", "https://github.com/CodeWithSujal/PortfolioData/raw/main/0199.png", "https://github.com/CodeWithSujal/PortfolioData/raw/main/0200.png", "https://github.com/CodeWithSujal/PortfolioData/raw/main/0198.png"],
    projectLink:"https://drive.google.com/file/d/1sewgL820QhlKzOkg5WfliyOlOKNZTMRp/view?usp=sharing",
    category: "Green Screen"
  },
  {
    id: 5,
    title: "Hollywood Green Screen Project",
    description: "This VFX shot was created in Blender using advanced compositing and visual storytelling techniques. I tracked the live-action footage to ensure accurate motion sync and then integrated digital effects that react naturally with the character’s movement. Careful color grading, lighting adjustments, and subtle atmospheric elements were applied to match the CGI seamlessly with the real footage. This project showcases my ability to combine live-action and digital effects, focusing on realism, timing, and smooth visual integration within Blender.",
    tools: ["Blender", "Cinema 4D","After Effects"],
    image:[ "https://github.com/CodeWithSujal/PortfolioData/raw/main/0013.png"],
    projectLink:"https://drive.google.com/file/d/1wE8gwvqFvvhbtKgqOKed84QbjjtSuzPu/view?usp=sharing",
    category: "VFX"
  },
  {
    id: 6,
    title: "Runner Jump Game Art and Development",
    description: "This stylized 3D game was designed and developed in Unreal Engine 5, featuring a dynamic third-person runner experience set in a medieval fantasy world. I built the full gameplay loop including character movement, timed challenges, platform obstacles, interactive UI elements, and a progressive level-unlock system. The environment is crafted with vibrant visuals and clear navigation flow to keep the player engaged while maintaining smooth performance. From scripting mechanics in Blueprint to designing menus, feedback messages, and collectible systems, this project showcases my complete understanding of game development — blending creativity, technical skills, and user-focused design into a fun playable experience.",
    tools: ["Unreal Engine 5", "Epic Game Launcher","Reality Scan","Mixamo","Blender"],
    image: ["https://github.com/CodeWithSujal/PortfolioData/raw/main/Screenshot%202025-10-17%20004331.png", "https://github.com/CodeWithSujal/PortfolioData/raw/main/Screenshot%202025-10-17%20004650.png", "https://github.com/CodeWithSujal/PortfolioData/raw/main/Screenshot%202025-10-17%20004336.png", "https://github.com/CodeWithSujal/PortfolioData/raw/main/Screenshot%202025-10-17%20004415.png"],
    projectLink:"https://drive.google.com/drive/folders/1jPp_QIlv1qvKUTvYmAfkSCqAU3SievU9?usp=sharing",
    category: "Game Art"
  } 
];

export const SKILLS: Skill[] = [
  { name: "Blender", level: 90, category: "Software" },
  { name: "Unreal Engine 5", level: 80, category: "Software" },
  { name: "Adobe Photoshop", level: 85, category: "Software" }, 
  { name: "After Effects", level: 70, category: "Software" },
  { name: "VFX Simulation", level: 95, category: "Core" },
  { name: "3D Animation", level: 85, category: "Core" },
  { name: "Compositing", level: 75, category: "Core" },
  { name: "Lighting & Rendering", level: 80, category: "Core" },
];