package business

import (
	"context"
	"demo-service/services/user/entity"
	"github.com/viettranx/service-context/core"
)

type UserRepository interface {
	GetUserById(ctx context.Context, id int) (*entity.User, error)
	GetUsersByIds(ctx context.Context, ids []int) ([]entity.User, error)
	CreateNewUser(ctx context.Context, data *entity.UserDataCreation) error
}

type Business struct {
	repository UserRepository
}

func NewBusiness(repository UserRepository) *Business {
	return &Business{repository: repository}
}

func (biz *Business) GetUserProfile(ctx context.Context) (*entity.User, error) {
	requester := core.GetRequester(ctx)

	uid, _ := core.FromBase58(requester.GetSubject())
	requesterId := int(uid.GetLocalID())

	user, err := biz.repository.GetUserById(ctx, requesterId)

	if err != nil {
		return nil, core.ErrUnauthorized.
			WithError(entity.ErrCannotGetUser.Error()).
			WithDebug(err.Error())
	}

	return user, nil
}

func (biz *Business) GetUserDetails(ctx context.Context, id int) (*entity.User, error) {
	user, err := biz.repository.GetUserById(ctx, id)

	if err != nil {
		if err == core.ErrRecordNotFound {
			return nil, core.ErrNotFound.
				WithError(entity.ErrCannotGetUser.Error()).
				WithDebug(err.Error())
		}

		return nil, core.ErrInternalServerError.
			WithError(entity.ErrCannotGetUser.Error()).
			WithDebug(err.Error())
	}

	return user, nil
}

func (biz *Business) GetUsersByIds(ctx context.Context, ids []int) ([]entity.User, error) {
	users, err := biz.repository.GetUsersByIds(ctx, ids)

	if err != nil {
		return nil, core.ErrNotFound.
			WithError(entity.ErrCannotGetUsers.Error()).
			WithDebug(err.Error())
	}

	return users, nil
}

func (biz *Business) CreateNewUser(ctx context.Context, data *entity.UserDataCreation) error {
	err := biz.repository.CreateNewUser(ctx, data)

	if err != nil {
		return core.ErrInternalServerError.
			WithError(entity.ErrCannotCreateUser.Error()).
			WithDebug(err.Error())
	}

	return nil
}
