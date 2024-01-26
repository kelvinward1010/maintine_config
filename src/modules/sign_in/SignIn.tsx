import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import { useForm } from '@mantine/form';
import { Box, Button, Flex, Grid, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';

export function SignIn() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length == 0 ? 'You must be have password' : null),
    },
  });

  const data = {
    email: form.getTransformedValues().email,
    password: form.getTransformedValues().password,
  }

  const hanldeSubmit = () => {
    console.log(data)
    navigate('/');
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
              <Text size={'xl'} c={'teal.4'} className={styles.title}>Sign In</Text>
              <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
              <PasswordInput
                label="Password"
                placeholder="Password"
                {...form.getInputProps('password')}
              />
              <Group justify="flex-end" mt="md">
                <Text c="teal.4" className={styles.qs_signin} onClick={() => navigate('/sign_up')}>You don't have an account!</Text>
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </Grid.Col>
      </Grid>
    </div>
  )
}