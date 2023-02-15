

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
  updateUser(input: {id: ${idUser}, orga_id: ${idOrga}}) {
    id
    orga_id
  }
}
`;
        return query2
    }


}