CREATE DEFINER=`root`@`localhost` PROCEDURE `login`(
	in iUsername varchar(16),
    in iPassword varchar(45)
)
BEGIN
	declare vUser int default 0;
    declare vSession int default 0;
    declare vToken varchar(45);
    declare vResult bool;
   
  set vToken = (select uuid());
  
  Select u.idUsers
    into vUser 
    from users u
    where u.username = iUsername and
		  u.password = iPassword;
          
	if vUser > 0 then 
		select count(*)
        into vSession
        from sessions s
        where s.idUser = vUser;
        
        if vSession > 0 then
			delete from sessions s where  s.idUser = vUser;
        end if;
                
        insert into sessions(idUser, token, loginAt) values (vUser, vToken, now());
         set vResult = true;
	else
		set vToken = '';
        set vResult = false;
    end if;
    
	Select vResult as result, vToken as token;
END