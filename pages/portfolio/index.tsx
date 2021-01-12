import PortfolioLayout from '../../components/portfolio/PortfolioLayout';
import About from '../../components/portfolio/About';
import Skill from '../../components/portfolio/Skill';
import Project from '../../components/portfolio/Project';
import Contact from '../../components/portfolio/Contact';

function PortfolioPage() {
  return (
    <PortfolioLayout>
      <About />
      <Skill />
      <Project />
      <Contact />
    </PortfolioLayout>
  )
}

export default PortfolioPage;
