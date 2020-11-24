import Logo from '~/components/Logo.vue';

export default {
  title: 'Logo',
  component: Logo,
}

const Template = (args, { argTypes }) => ({
  components: { Logo },
  props: Object.keys(argTypes),
  template: '<Logo />',
});

export const empty = Template.bind({});

empty.args = {

};
