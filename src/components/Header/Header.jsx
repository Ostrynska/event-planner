import Container from '../Container/Container';
import SearchInput from '../SearchInput/SearchInput';

import SelectLang from '../SelectLang/SelectLang';
import useMediaQuery from '../../hooks/useMediaQuery';

import {
  HeaderWrapp,
  HeaderContent,
  HeaderLink,
  HeaderFormEl,
} from './Header.styled';

function Header() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (
    <HeaderWrapp>
      <Container>
        <HeaderContent>
          <HeaderLink href="/">Event Planner</HeaderLink>
          {isTablet ? (
            <HeaderFormEl>
              <SearchInput />
              <SelectLang />
            </HeaderFormEl>
          ) : (
            <>
              <SelectLang />
              <SearchInput />
            </>
          )}
        </HeaderContent>
      </Container>
    </HeaderWrapp>
  );
}

export default Header;
