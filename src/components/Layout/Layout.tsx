import { AppShell, Burger, Group, Image, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LayoutProps } from "./Layout.types";
import { IconHome2 } from "@tabler/icons-react";

const Layout = ({ children }: LayoutProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image
            src="https://www.weather.gov/bundles/templating/images/header/header.png"
            alt="National Weather Service"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink
          href="/"
          label="Home"
          leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
