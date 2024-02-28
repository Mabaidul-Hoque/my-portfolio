"use client";

import { motion } from "framer-motion";

const PortFolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* PortFolioPage */}
      <div className="w-11/12 m-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        quisquam aliquid fugiat mollitia eveniet quam at libero incidunt quis
        magni obcaecati eos numquam odio quae deleniti, quo deserunt labore
        dolorum ipsa? Sapiente possimus esse, exercitationem a quia quisquam
        temporibus nemo eos debitis, doloribus, earum ut! Mollitia laudantium
        sapiente harum blanditiis asperiores earum possimus aspernatur esse
        Voluptatibus distinctio voluptas dicta laboriosam aut minima commodi id,
        officia illum consequatur quae corporis ipsum placeat! Eius aspernatur
        tempora vitae voluptatibus explicabo aperiam eos nam, dolor repellat
        cupiditate nemo reprehenderit qui quas, quo natus! Fugit esse tempore
        dolore. Labore nesciunt sit eaque tempore! Modi ullam animi optio facere
        tempore. Ullam magni nulla tempora, voluptas sit error, sequi ex quas
        rem dolores quod hic voluptatum magnam assumenda nihil voluptatibus
        consequatur minima, fuga quo adipisci. Repellat omnis excepturi
        voluptate est hic non laboriosam.
      </div>
    </motion.div>
  );
};

export default PortFolioPage;
