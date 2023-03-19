import { HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function SocialNetworks() {
  return (
    <HStack spacing="24px" my="4">
      <Link href="https://www.facebook.com/profile.php?id=100070381551144">
        <BsFacebook size="24px" color="white" />
      </Link>
      <Link href="https://twitter.com/NoePompeyo">
        <BsTwitter size="24px" color="white" />
      </Link>
      <Link href="https://www.instagram.com/noe_pompeyo/">
        <BsInstagram size="24px" fontVariant="" color="white" />
      </Link>
      <Link href="https://github.com/noepompeyo">
        <BsGithub size="24px" color="white" />
      </Link>
    </HStack>
  );
}
