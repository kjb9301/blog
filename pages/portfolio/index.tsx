import PortfolioLayout from '../../components/portfolio/PortfolioLayout';
import About from '../../components/portfolio/About';
import Skill from '../../components/portfolio/Skill';
import Project from '../../components/portfolio/Project';

function PortfolioPage() {
  return (
    <PortfolioLayout>
      <About />
      <Skill />
      <Project />
    </PortfolioLayout>
  )
}

export default PortfolioPage;
