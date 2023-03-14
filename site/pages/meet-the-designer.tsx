import {Layout} from '@components/common';
import {Text, Container} from '@components/ui';
import Image from 'next/image';

type Props = {}

const meetTheDesigner = (props: Props) => {
    return (
        <Container className="container">
            <div className="header">
                <Text variant="pageHeading">Meet The Designer</Text>
            </div>
            <div className="section1">
                <div className="text1">
                    <Text variant="sectionHeading">Lorum Ipsum</Text>
                    <Text variant="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Natoque penatibus et magnis dis parturient. Et netus et malesuada fames ac. Eu facilisis sed odio morbi quis commodo. Nunc vel risus commodo viverra maecenas. Leo duis ut diam quam nulla. Porttitor lacus luctus accumsan tortor posuere ac ut. Dignissim diam quis enim lobortis. Dui id ornare arcu odio ut sem nulla pharetra diam.

                        Sed enim ut sem viverra. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Massa tempor nec feugiat nisl pretium fusce id. Tempor id eu nisl nunc mi. Rutrum quisque non tellus orci ac. A iaculis at erat pellentesque. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Felis donec et odio pellentesque diam volutpat. Risus commodo viverra maecenas accumsan lacus. Nullam eget felis eget nunc lobortis. Commodo quis imperdiet massa tincidunt. Quis imperdiet massa tincidunt nunc pulvinar. Amet purus gravida quis blandit turpis cursus in hac habitasse. Mauris nunc congue nisi vitae suscipit tellus. Arcu dictum varius duis at consectetur lorem donec massa.

                    </Text>
                </div>
                <Image
                    className="carla1"
                    src='/Carla1.jpeg'
                    alt={'Carla Image'}
                    width="280"
                    height="420"
                    priority
                    quality={100}
                />
            </div>
            <div className="section2">
                <Image
                    className="carla2"
                    src='/Carla3.jpeg'
                    alt={'Carla Image'}
                    width="400"
                    height="291"
                    priority
                    quality={100}
                />
                <div className="text2">
                    <Text variant="sectionHeading">Lorum Ipsum</Text>
                    <Text variant="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </div>
            </div>

            <div className="section3">
                <div className="text1">
                    <Text variant="sectionHeading">Lorum Ipsum</Text>
                    <Text variant="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Natoque penatibus et magnis dis parturient. Et netus et malesuada fames ac. Eu facilisis sed odio morbi quis commodo. Nunc vel risus commodo viverra maecenas. Leo duis ut diam quam nulla. Porttitor lacus luctus accumsan tortor posuere ac ut. Dignissim diam quis enim lobortis. Dui id ornare arcu odio ut sem nulla pharetra diam.

                        Sed enim ut sem viverra. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Massa tempor nec feugiat nisl pretium fusce id. Tempor id eu nisl nunc mi. Rutrum quisque non tellus orci ac. A iaculis at erat pellentesque. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Felis donec et odio pellentesque diam volutpat. Risus commodo viverra maecenas accumsan lacus. Nullam eget felis eget nunc lobortis. Commodo quis imperdiet massa tincidunt. Quis imperdiet massa tincidunt nunc pulvinar. Amet purus gravida quis blandit turpis cursus in hac habitasse. Mauris nunc congue nisi vitae suscipit tellus. Arcu dictum varius duis at consectetur lorem donec massa.

                    </Text>
                </div>
                <Image
                    className="carla3"
                    src='/Carla2.jpeg'
                    alt={'Carla Image'}
                    width="280"
                    height="420"
                    priority
                    quality={100}
                />
            </div>
            {/* <Image
                src='/Carla4.jpeg'
                alt={'Carla Image'}
                width="667"
                height="1000"
            /> */}
            {/* <Image 
            src='/Carla5.jpeg'
            alt={'Carla Image'}
            width="1000"
            height="663"
            /> */}
            {/* <Image 
            src='/Carla6.jpeg'
            alt={'Carla Image'}
            width="1000"
            height="667"
            /> */}
        </Container>
    )
}
meetTheDesigner.Layout = Layout;
export default meetTheDesigner