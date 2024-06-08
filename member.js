function skillsMember() {
    return{
        restrict:'E',
        tempelateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }
    };
}