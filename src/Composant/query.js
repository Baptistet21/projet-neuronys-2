
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
                users {
                    items {
                         id
                        }
                        }

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
    getOrganisation(id: ${id}) {
        users {
            items {
                orga {
                    name
                    credits
                    orga_type
                    stripe_id
                }
            }
        }
    }
}
`;
        return query4;
    }
}