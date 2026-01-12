import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
isExpanded: { [key: string]: boolean } = {
    frontend: false,
    tools: false,
    practices: false,
    designTools: false,
    softSkills: false
  };
  // Toggle expansion state for each question
  toggleExpand(questionId: string) {
    this.isExpanded[questionId] = !this.isExpanded[questionId];
  }
  questions = [
    {
      id: 'frontend',
      title: 'Frontend Technologies',
      icon: 'fa-code',
      answers: [
        'Angular',
        'Javascript/Typescript',
        'HTML',
        'SCSS',
        'Bootstrap'
      ]
    },
    {
      id: 'tools',
      title: ' Developer Tools',
      icon: 'fa-wrench',
      answers: [
        'GIT',
        'GitHub',
        'NPM',
        'Postman',
        'Firebase',
        'Filezilla',
        'Visual Studio Code',
        'Slack',
        'Jira',
        'Docker',
        'Bitbucket'
      ]
    },
     {
      id: 'practices',
      title: 'Practices',
      icon: 'fa-desktop',
      answers: [
        'Responsive Design',
        'API Integration',
        'Performance Optimization',
        'CI/CD',
        'Agile Methodologies'
      ]
    },
    {
      id: 'designTools',
      title: 'Design Tools',
      icon: 'fa-paint-brush',
      answers: [
        'Figma',
        'Canva',
        'Photoshop',
      ]
    },
    {
      id: 'softSkills',
      title: 'Soft Skills',
      icon: 'fa-heart',
      answers: [
        'Collaboration',
        'Adaptability',
        'Time Management',
        'Problem Solving',
        'Continues Learning',
      ]
    }
  ];

}
