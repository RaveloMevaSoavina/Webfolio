import React, { useState } from 'react';
import { ThemeUIProvider, Box } from 'theme-ui';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import Skill from '../sections/skill';
import AboutMe from '../sections/aboutme';
import Contact from '../sections/contact';
import Project from '../sections/project';
import Education from '../sections/education';
import Experience from '../sections/experience';
import ProjectItem from '../sections/projectitems'
import projects from '../data/projects';


export default function Home({ posts }) {
	const [IDofLookAt, setIDofLookAt] = useState(0)

	const handleLookAt = (id) => {
		setIDofLookAt(id);
	}

	return (
		<ThemeUIProvider theme={theme}>
			<Layout>
				<SEO title="Ravelo Meva Soavina" />
				<Banner />
				<AboutMe />
				<Education />
				<Skill />
				<Experience />
				<Project lookAt={handleLookAt} />
				<Contact />
				{IDofLookAt != 0 && <ProjectItem post={projects.filter(post => post.id == IDofLookAt)[0]} lookAt={handleLookAt} />}
			</Layout>
		</ThemeUIProvider>
	);
}


