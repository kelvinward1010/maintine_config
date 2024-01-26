import { useForm } from '@mantine/form';
import styles from './style.module.scss';
import { Box, Button, Flex, Grid, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function SignUp() {

  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      image: '',
      password: '',
      confirmPassword: '',
    },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      image: (value) => (value.length == 0 ? 'You must be have image URL to register' : null),
      password: (value) => (value.length == 0 ? 'You must be have password' : null),
      confirmPassword: (value, values) => value !== values.password ? 'Passwords did not match' : null,
    },
  });

  const data = {
    name: form.getTransformedValues().name,
    email: form.getTransformedValues().email,
    image: form.getTransformedValues().image,
    password: form.getTransformedValues().password,
  }

  const hanldeSubmit = () => {
    console.log(data)
    navigate('/sign_in');
  }

  return (
    <div className={styles.container}>
      <Grid className={styles.center_main} justify="center" align="center">
        <Grid.Col span={7} h={'100vh'} className={styles.center_1}>
          <Flex
              mih={200}
              gap="sm"
              justify="flex-start"
              align="center"
              direction="row"
              className={styles.main_logo}
          >
              <IconBrandMantine
                  color={'teal'}
                  size={150}
              />
              <Text c="teal.4" fw={500} className={styles.main_logo_text}>
                  Maintine Config
              </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={5} className={styles.center_2}>
          <Box maw={340} mx="auto">
            <form onSubmit={form.onSubmit(hanldeSubmit)}>
              <Text size={'xl'} c={'teal.4'} className={styles.title}>Sign Up</Text>
              <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
              <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
              <TextInput mt="sm" label="Image URL" placeholder="Url" {...form.getInputProps('image')} />
              <PasswordInput
                label="Password"
                placeholder="Password"
                {...form.getInputProps('password')}
              />

              <PasswordInput
                mt="sm"
                label="Confirm password"
                placeholder="Confirm password"
                {...form.getInputProps('confirmPassword')}
              />
              <Group justify="flex-end" mt="md">
                <Text c="teal.4" className={styles.qs_signin} onClick={() => navigate('/sign_in')}>You have an account!</Text>
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </Grid.Col>
      </Grid>
    </div>
  )
}