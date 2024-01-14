'use client'
import { AppShell, Burger, Group, BackgroundImage } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useHeadroom } from '@mantine/hooks';
import { IconBuildingChurch } from '@tabler/icons-react';

import { FooterCentered } from './Footer';
import NavBar from './NavBar';

export function CustomAppShell({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: { base: 80, md: 100, lg: 110 } }}
      footer={{ height: { base: 115, md: 70, lg: 70 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened || !pinned },
      }}
      padding={{ base: 10, sm: 15, lg: 'xl' }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <IconBuildingChurch size="2rem" stroke={2}/><h2> Vietnamese Unity Baptist Church</h2>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavBar></NavBar>
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <AppShell.Footer>
        <FooterCentered></FooterCentered>
      </AppShell.Footer>
    </AppShell>
  );
}