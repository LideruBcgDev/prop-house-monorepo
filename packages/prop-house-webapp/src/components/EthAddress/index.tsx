import clsx from 'clsx';
import React from 'react';
import { useAppSelector } from '../../hooks';
import { useReverseENSLookUp } from '../../utils/ensLookup';
import trimEthAddress from '../../utils/trimEthAddress';
import classes from './EthAddress.module.css';
import Davatar from '@davatar/react';
import { useEthers } from '@usedapp/core';

const EthAddress: React.FC<{
  address: string;
  truncate?: boolean;
  className?: string;
  hideDavatar?: boolean;
  imgSize?: number;
}> = props => {
  const { address, truncate, hideDavatar = true, imgSize } = props;
  const { library: provider } = useEthers();

  const etherscanHost = useAppSelector(state => state.configuration.etherscanHost);
  const buildAddressHref = (address: string) => [etherscanHost, 'address', address].join('/');

  const ens = useReverseENSLookUp(address);

  return (
    <div onClick={(e: any) => e.stopPropagation()} className={classes.ethAddress}>
      <a href={buildAddressHref(address)} target="_blank" rel="noreferrer">
        {!hideDavatar && (
          <Davatar
            size={imgSize ? imgSize : 24}
            address={address}
            provider={provider}
            generatedAvatarType="blockies"
          />
        )}
        <span className={clsx(classes.address, truncate && classes.truncate, props.className)}>
          {ens ? ens : trimEthAddress(address)}
        </span>
      </a>
    </div>
  );
};

export default EthAddress;
