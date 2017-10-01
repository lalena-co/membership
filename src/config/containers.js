import parameterize from 'parameterize';

const createContainerConfig = (title, label=null, slug=null, path=null) => {
  const generatedLabel = label ? label : title;
  const generatedSlug = slug ? slug : parameterize(generatedLabel);
  const generatedPath = path ? path : `/${generatedSlug}`;

  return {
    label: generatedLabel,
    path: generatedPath,
    slug: generatedSlug,
    title,
  }

};

export default {
  Login: createContainerConfig('Login', 'Login', 'login', '/'),
  Membership: createContainerConfig('Membership', 'Membership', 'membership', '/'),
  SignUp: createContainerConfig('Sign Up'),
  Edit: createContainerConfig('Edit'),
};
