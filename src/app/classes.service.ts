import { Injectable } from '@angular/core';

@Injectable()
export class ClassesService {
  private list: discipline[] = [
    {
      name: 'Projeto de Trabalho de Graduação em Sistemas para Internet I',
      weekDate: 'Sábado',
      time: '11:30 - 13:10',
    },
    {
      name: 'Projeto de Encontrabilidade',
      weekDate: 'Segunda-feira',
      time: '19:00 - 22:30',
    },
    {
      name: 'Arquitetura Orientada a Serviços',
      weekDate: 'Terça-feira',
      time: '19:00 - 22:30',
    },
    {
      name: 'Tópicos Especiais em Sistemas para Internet II',
      weekDate: 'Sexta-feira',
      time: '19:00 - 22:30',
    },
  ];
  constructor() {}

  add(discipline: discipline) {
    this.list.push(discipline);
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }

  getClasses() {
    return this.list;
  }
}

interface discipline {
  name: string;
  time: string;
  weekDate: string;
}
