package model

import "time"

type MAccesUser struct {
	mAccId          int64
	mUserId         int64
	mPpassword      string
	mUserName       string
	mUserAge        int
	mUserBirthday   time.Time
	mUserGender     string
	mUserStatus     string
	mUserUpdateDate time.Time
	mUserBikou      string
	mUserStay       string
}

func NewMAccesUser(userId int64) *MAccesUser {
	mAccesUser := &MAccesUser{
		mUserId: userId,
	}

	return mAccesUser
}
