import { Navbar, Button, Link, Text } from "@nextui-org/react";
import styles from '../styles/layout.module.css'


const layout = ({children}) => {

    const pageList = [
        "1",
        "2",
        "3"
    ]

    return (
        <>
            <Navbar isBordered variant="floating">
                <Navbar.Brand>
                    <Navbar.Toggle aria-label="toggle navigation" />
                    <Text b color="inherit" hideIn="xs" className={styles.name}>
                        BenLawrence.me
                    </Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
                <Navbar.Collapse>
                    {pageList.map((item, index) => (
                        <Navbar.CollapseItem key={item}>
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href={item}
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
            <main>{children}</main>
        </>
    )
}

export default layout