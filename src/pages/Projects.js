import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Modal } from '../components/Modal';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

export const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const projectsCollection = collection(db, 'projects');

  useEffect(() => {
    async function getProjects() {
      const data = await getDocs(projectsCollection);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getProjects();
  }, []);

  return (
    <>
      <Splide
        options={{
          direction: 'ttb',
          wheel: true,
          releaseWheel: true,
          height: '100vh',
          width: '100vw',
          arrows: false,
        }}
      >
        <SplideSlide className="wrapper wrapper_centered">
          <h2 className="header header_alt">PROJECTS</h2>
        </SplideSlide>
        <SplideSlide className="grid">
          {projects.map((project) => (
            <div key={project.id}>
              <div
                onClick={() => {
                  setCurrentProject(project);
                  setOpenModal(true);
                }}
                className="block-desc block-desc_project flex justify-center content-center text-center flex-col relative"
              >
                <img
                  src={project.img}
                  alt="icon"
                  className="block-desc_project__img"
                />
                <h3 className="block-desc_project__text absolute left-0 right-0">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </SplideSlide>
      </Splide>
      {openModal && (
              <Modal
                key={currentProject.id}
                closeModal={setOpenModal}
                desc={currentProject.desc}
                title={currentProject.name}
                img={currentProject.img}
              />
            )}
    </>
  );
};
