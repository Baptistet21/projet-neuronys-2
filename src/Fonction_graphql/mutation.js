

export default {
    /* mutation changement de credits*/
    updateCredits(id,credit) {
        const query1 = `
   mutation MyMutation {
  updateOrganisation(input: {id: ${id}, credits: ${credit}}) {
    id
    credits
    name
  }
}
`;
        return query1
    },

    /* mutation changement d'orga*/
    updateOrga(idUser, idOrga) {
        const query2 = `
   mutation MyMutation {
  updateUser(input: {id: ${idUser}, orga_id: ${idOrga}, , orga_rank: moldu}) {
    id
    orga_id
    orga_rank
  }
}
`;
        return query2
    },
    /* mutation update group user orga*/
    updateListUserOrga(idOrga, listUser,type) {
        const query3 = `
mutation MyMutation {
  updateOrganisation(input: {id: ${idOrga}, users_id: "${listUser}", orga_type: ${type}}) {
    id
    orga_type
  }
}

`;
        return query3
    },

    /* mutation update type user orga*/
    updateTypeOrga(idOrga,type) {
        const query4 = `
mutation MyMutation {
  updateOrganisation(input: {id: ${idOrga}, orga_type: ${type}}) {
    id
  }
}

`;
        return query4
    }



}