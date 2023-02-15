

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
    }


}