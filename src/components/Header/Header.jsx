import Container from '../Container/Container';
import SearchInput from '../SearchInput/SearchInput';

import SelectLang from '../SelectLang/SelectLang';

import {
  HeaderWrapp,
  HeaderContent,
  HeaderLink,
  HeaderFormEl,
} from './Header.styled';

function Header() {
  return (
    <HeaderWrapp>
      <Container>
        <HeaderContent>
          <nav>
            <HeaderLink to={'/'}>Event Planner</HeaderLink>
          </nav>
          <HeaderFormEl>
            <SearchInput />
            <SelectLang />
          </HeaderFormEl>
        </HeaderContent>
      </Container>
    </HeaderWrapp>
  );
}

export default Header;
