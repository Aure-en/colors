import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Palette as PaletteType, Steps } from '../../ts/colors/colors';
import Palette from './Palette';

interface Props {
  mainPalette: PaletteType;
  steps: Steps;
}

const Palettes: React.FC<Props> = ({
  mainPalette,
  steps,
}: Props): ReactElement => (
  <Wrapper>
    {steps.light.map(
      (palette, index) => palette.length > 0 && (
      <Palette
        key={`${index}-${palette.reduce(
          (concat, color) => concat + color.hex,
          '',
        )}`}
        palette={palette}
      />
      ),
    )}

    {mainPalette.length > 0 && (
    <Palette
      palette={mainPalette}
      main
    />
    )}

    {steps.dark.map(
      (palette, index) => palette.length > 0 && (
      <Palette
        key={`${index}-${palette.reduce(
          (concat, color) => concat + color.hex,
          '',
        )}`}
        palette={palette}
      />
      ),
    )}
  </Wrapper>
);

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-gap: 1rem;
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
`;

const Colors = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Informations = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  width: 100%;
`;

const Editing = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  height: 100%;
  width: 100%;
  top: 0;
`;

export default Palettes;
