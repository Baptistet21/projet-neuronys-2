
/* recup id user et credits*/

export default {
    getIdByName(email) {
        const query = `
query MyQuery {
    byEmail(email: "${email}") {
        items {
            id
        orga {
            credits
            }
        }
    }
}
`;
        return query;
    },
    //User Infos:

    /*recup user par rapport a son id*/

    getUserOrga(id) {
        const query2 =  `
query MyQuery  {
    getUser(id: ${id}) {
        email
        id
        orga {
            name
            credits
            orga_type
            stripe_id

        }
        orga_rank
        pseudo
    }
}
`;
        return query2;
    }
    //User Infos:
}