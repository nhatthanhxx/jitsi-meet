// @flow

import { Component } from 'react';

import { MEDIA_TYPE } from '../../base/media';
import { unmuteRemote } from '../actions';

/**
 * The type of the React {@code Component} props of
 * {@link AbstractUnMuteRemoteParticipantDialog}.
 */
export type Props = {

    /**
     * The Redux dispatch function.
     */
    dispatch: Function,

    /**
     * The ID of the remote participant to be muted.
     */
    participantID: string,

    /**
     * Function to translate i18n labels.
     */
    t: Function
};

/**
 * Abstract dialog to confirm a remote participant mute action.
 *
 * @extends Component
 */
export default class AbstractUnMuteRemoteParticipantDialog<P:Props = Props>
    extends Component<P> {
    /**
     * Initializes a new {@code AbstractMuteRemoteParticipantDialog} instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props: P) {
        super(props);

        // Bind event handlers so they are only bound once per instance.
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit: () => boolean;

    /**
     * Handles the submit button action.
     *
     * @private
     * @returns {boolean} - True (to note that the modal should be closed).
     */
    _onSubmit() {
        const { dispatch, participantID } = this.props;

        dispatch(unmuteRemote(participantID, MEDIA_TYPE.AUDIO));

        return true;
    }
}
