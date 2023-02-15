
/* recup id user et credits*/

import {getOrgaByName} from "../graphql/queries";

export default {
    getIdByName(email) {
        const query = `
query MyQuery {
    byEmail(email: "${email}") {
        items {
            id
        orga {
            id
            credits
            }
        }
    }
}
`;
        return query;
    },

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
    },
    /* recup orga id*/
    getOrgaIdByName(name) {
        const query3 =  `
    query MyQuery {
        listOrganisations(filter: {name: {eq: "${name}"}})  {
            items {
                id
                credits
             

        }
    }
}
`;
        return query3;
    },

    /* recup orga items*/
    getOrgaByID(id) {
        const query4 =  `
    query MyQuery {
  listOrganisations(filter: {id: {eq: ${id}}}) {
    items {
      id
      name
      credits
      orga_type
      stripe_id
    }
  }
}

`;
        return query4;
    },

    /* recup list user */
    getListUserByIdOrga(id) {
        const query5 =  `
query MyQuery {
  usersByOrga_idAndPseudo(orga_id: ${id}) {
    items {
      id
    }
  }
}

`;
        return query5;
    }
}