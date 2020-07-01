import * as Knex from 'knex'

export async function seed (knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(() => {
      // Inserts seed entries
      return knex('items').insert([
        { title: 'Lampadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papeis e Papelao', image: 'papei-papelao.svg' },
        { title: 'Residuos Eletronicos', image: 'eletronicos.svg' },
        { title: 'Residuos organicos', image: 'organicos.svg' },
        { title: 'Oleo de Cozinha', image: 'oleo.svg' }
      ])
    })
};
