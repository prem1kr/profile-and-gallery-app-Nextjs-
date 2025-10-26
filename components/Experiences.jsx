export function Experiences() {
  return (
    <div className="space-y-4 text-gray-300">
      <div>
        <h3 className="text-white font-semibold text-lg">
          ThinkNEXT Technologies Pvt. Ltd. — Full Stack Web Development Intern
        </h3>
        <p className="text-sm text-gray-400">Jan 2024 – Apr 2024 | Mohali, Punjab</p>
        <p>
          Worked as a full-stack development intern, contributing to end-to-end 
          design and implementation of dynamic web applications. 
          Collaborated with a team to develop an <span className="text-white">e-commerce website</span> 
          and a <span className="text-white">fintech platform</span> using 
          <span className="text-white"> React, Node.js, Express.js,</span> and 
          <span className="text-white"> MongoDB</span>.
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Built responsive frontends using React and Tailwind CSS.</li>
          <li>Developed secure RESTful APIs for product and user management.</li>
          <li>Integrated payment and authentication systems.</li>
          <li>Enhanced app performance and optimized database queries.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg">
          Academic Projects — Chandigarh Engineering College
        </h3>
        <p className="text-sm text-gray-400">2022 – 2023</p>
        <p>
          Led multiple academic projects focused on IoT and web technologies, 
          applying real-world problem-solving to create functional prototypes.
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Developed a smart attendance system using Node.js and RFID integration.</li>
          <li>Built a personal finance tracker using the MERN stack.</li>
        </ul>
      </div>
    </div>
  );
}
