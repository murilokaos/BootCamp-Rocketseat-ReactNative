import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Creators as modalActions } from '~/store/ducks/modal';
import {
  CustomCallout, Container, ImageMarker, Label, Title,
} from './styles';
import Modal from './components/Modal';

const Maps = ({ userList, isVisible, ...props }) => {
  const opts = {
    latitude: -27.2177659,
    longitude: -49.6451598,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0031,
  };

  function onLongPress(e) {
    const { showModal } = props;
    showModal(e.nativeEvent.coordinate);
  }

  return (
    <Container>
      <Modal visible={isVisible} />
      <MapView
        initialRegion={opts}
        style={{ ...StyleSheet.absoluteFillObject }}
        onLongPress={onLongPress}
        showsUserLocation
        loadingEnabled
      >
        {userList.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.coordinate.latitude,
              longitude: marker.coordinate.longitude,
            }}
            title={marker.title}
            description={marker.description}
          >
            <ImageMarker source={{ uri: `${marker.image}` }} />
            <Callout tooltip>
              <CustomCallout>
                <Title>{marker.title}</Title>
                <Label>{marker.description}</Label>
              </CustomCallout>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </Container>
  );
};

Maps.propTypes = {
  userList: PropTypes.arrayOf({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    cordinate: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  }).isRequired,
  isVisible: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch);

const mapStateToProps = ({ users, modal }) => ({
  userList: users.data,
  isVisible: modal.isVisible,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
