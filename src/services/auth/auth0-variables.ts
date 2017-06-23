interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '2gkrmbnAvlAnaBDWqls3vhCNy3b1oqaF',
  domain: 'mikemichaelis.auth0.com',
  callbackURL: 'http://localhost:8100/'
};
