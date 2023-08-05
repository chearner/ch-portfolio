import { ReactElement } from 'react';
import { Box, Flex, Text, Stack, VStack, Icon, Heading, SimpleGrid } from '@chakra-ui/react';
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiHtml5, SiCss3, SiGit, SiGithub, SiNpm } from 'react-icons/si';

const skillArray = [
  { skill: 'React', description: '', icon: SiReact },
  { skill: 'Angular', description: '', icon: SiAngular },
  { skill: 'JavaScript', description: '', icon: SiJavascript },
  { skill: 'TypeScript', description: '', icon: SiTypescript },
  { skill: 'HTML', description: '', icon: SiHtml5 },
  { skill: 'CSS', description: '', icon: SiCss3 },
  { skill: 'Git', description: '', icon: SiGit },
  { skill: 'GitHub', description: '', icon: SiGithub },
  { skill: 'npm', description: '', icon: SiNpm },
];

const Skill = ({ skill, description, icon }) => {
  return (
    <Flex w={16} h={16} align={'center'} justify={'center'} direction='column'>
      {icon}
      <Text fontWeight={600}>{skill}</Text>
      <Text color={'gray.600'}>{description}</Text>
    </Flex>
  );
};

export const Skills = () => {
  return (
    <Flex p='100'>
      <VStack align={'center'} spacing='10'>
        <Heading as='h1' size='2xl'>
          Skills
        </Heading>
        <Text mb='50'>
          I specialize in React and Angular development, building on top of my fundamental skills in HTML, CSS and JavaScript. 
          I will leverage many tools, techniques and technologies to create and deliver a solution.
          Years of experience allows me to choose the best technology based on a project's requirements and overall goals.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 6 }} spacing={50}>
          {skillArray.map((skill) => (
            <Skill icon={<Icon as={skill.icon} w={10} h={10} />} skill={skill.skill} description={skill.description} />
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};
